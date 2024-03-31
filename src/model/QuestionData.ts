export interface QuestionData {
  question_id: number;
  answers_count: number;
  link: string;
  owner: {
    display_name: string;
    link: string;
    profile_image: string;
  };
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}
