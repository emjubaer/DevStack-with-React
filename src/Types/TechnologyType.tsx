export default interface TechnologyType {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}
