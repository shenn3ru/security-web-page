export interface PlanModel {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  recommended: boolean; // Changed from 'recommendation' to match DB and Code
}