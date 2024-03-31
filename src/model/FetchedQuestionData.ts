export interface FetchedQuestionData {
  tags: string[];
  owner: { display_name: string; link: string; profile_image: string };
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}
