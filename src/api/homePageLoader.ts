import { FetchedTagData } from "../model/FetchedTagData";

export const fetchTags = async (): Promise<FetchedTagData[]> => {
  const response = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching tags !");
  }

  const { items } = await response.json();
  return items;
};
