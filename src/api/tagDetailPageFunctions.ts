import { FetchedQuestionData } from "../model/FetchedQuestionData";
import { QuestionData } from "../model/QuestionData";

export const fetchPosts = async (tagName: string | undefined) => {
  // const response = await fetch(
  //   "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  // );

  const response = await fetch("http://localhost:8080/questions");

  if (!response.ok) {
    throw new Error("An error occurred while fetching questions !");
  }

  const responseData = await response.json();
  const items = responseData.items as FetchedQuestionData[];

  const questionData = mapResponseData(items);
  const filteredQuestionData = filterQuestionData(questionData, tagName);

  return filteredQuestionData;
};

const mapResponseData = (data: FetchedQuestionData[]): QuestionData[] => {
  return data.map((item: FetchedQuestionData) => {
    return {
      question_id: item.question_id,
      answers_count: item.answer_count,
      link: item.link,
      owner: {
        display_name: item.owner.display_name,
        link: item.owner.link,
        profile_image: item.owner.profile_image,
      },
      score: item.score,
      tags: item.tags,
      title: item.title,
      view_count: item.view_count,
    };
  });
};

const filterQuestionData = (
  data: QuestionData[],
  wantedTag: string | undefined
): QuestionData[] => {
  return data.filter((item: QuestionData) => {
    if (wantedTag) {
      if (item.tags.includes(wantedTag)) {
        return item;
      }
    }
  });
};
