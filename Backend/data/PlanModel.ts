export interface PlanModel {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  recommendation: boolean;
}