export interface Solution {
  solution_id: number;
  created_on: string;
  title: string;
  link: string;
  source: string;
  tags: string[];
  my_solution?: string;
  perfect_solution?: string | boolean;
}
