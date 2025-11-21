const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- DATABASE CONNECTION ---
const db = mysql.createConnection({
    host: 'TABLET-H5LHTM4Q',
    user: 'root',       // Your MySQL username
    password: '12345',       // Your MySQL password
    database: 'techspec_db'
});

db.connect(err => {
    if (err) console.error('❌ Database connection failed:', err);
    else console.log('✅ Connected to MySQL Database');
});

const SECRET_KEY = 'my_secret_key';

// --- AUTHENTICATION ---

// 1. REGISTER
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // In a real app, HASH the password here!
    db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, 'user'], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Username already exists' });
            return res.status(500).json(err);
        }
        res.json({ message: 'User registered successfully' });
    });
});

// 2. LOGIN
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length > 0) {
            const user = results[0];
            const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '2h' });
            res.json({ token, username: user.username, role: user.role });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// --- SOLUTIONS (PLANS) CRUD ---

// GET ALL
app.get('/plans', (req, res) => {
    db.query('SELECT * FROM plans', (err, results) => {
        if (err) return res.status(500).json(err);
        // Parse features JSON
        const plans = results.map(p => ({
            ...p,
            features: typeof p.features === 'string' ? JSON.parse(p.features) : p.features,
            recommended: !!p.recommended
        }));
        res.json(plans);
    });
});

// GET BY ID
app.get('/plans/:id', (req, res) => {
    db.query('SELECT * FROM plans WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Not found' });
        const p = results[0];
        p.features = typeof p.features === 'string' ? JSON.parse(p.features) : p.features;
        res.json(p);
    });
});

// CREATE (Add Solution)
app.post('/plans', (req, res) => {
    const { name, description, price, imageUrl, features, recommended } = req.body;
    // Default image if none provided
    const img = imageUrl || 'https://placehold.co/600x400/2563eb/white?text=Security+Solution';
    
    db.query(
        'INSERT INTO plans (name, description, price, imageUrl, features, recommended) VALUES (?, ?, ?, ?, ?, ?)', 
        [name, description, price, img, JSON.stringify(features), recommended || false], 
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Plan added', id: result.insertId });
        }
    );
});

// DELETE
app.delete('/plans/:id', (req, res) => {
    db.query('DELETE FROM plans WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Deleted' });
    });
});
// UPDATE (Edit Solution)
app.put('/plans/:id', (req, res) => {
    const { name, description, price, features, recommended, imageUrl } = req.body;
    // Keep the old image or use the new one if provided
    const img = imageUrl || 'https://placehold.co/600x400/2563eb/white?text=Security+Solution';
    
    db.query(
        'UPDATE plans SET name = ?, description = ?, price = ?, imageUrl = ?, features = ?, recommended = ? WHERE id = ?',
        [name, description, price, img, JSON.stringify(features), recommended || false, req.params.id],
        (err, result) => {
            if (err) {
                console.error("Error updating plan:", err); // Add console log for debugging
                return res.status(500).json(err);
            }
            res.json({ message: 'Plan updated successfully' });
        }
    );
});
app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
});