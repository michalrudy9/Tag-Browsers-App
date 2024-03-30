import { FetchedTagData } from "../model/FetchedTagData";
import store from "../store/store";

let items: FetchedTagData[] = [];

export const fetchTags = async (): Promise<FetchedTagData[]> => {
  // const response = await fetch(
  //   "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  // );

  const response = await fetch("http://localhost:8080/tags");

  if (!response.ok) {
    throw new Error("An error occurred while fetching tags !");
  }

  const responseData = await response.json();
  items = responseData.items;

  checkIfSetAmountOfTags();
  checkIfSortTags();

  return items;
};

const checkIfSetAmountOfTags = () => {
  const { amountOfTags } = store.getState();
  const amount = amountOfTags.amount;

  if (amount !== "all") {
    const parseAmount = parseInt(amount);

    if (parseAmount) {
      items = items.splice(0, parseAmount);
    }
  }
};

const checkIfSortTags = () => {
  const { sortTags } = store.getState();

  if (sortTags.name !== "popular" || sortTags.direction !== "descending") {
    if (sortTags.name === "tag") {
      const descendingSortByTag = items.sort(
        (firstItem: FetchedTagData, secondItem: FetchedTagData) =>
          firstItem.name.localeCompare(secondItem.name)
      );

      if (sortTags.direction === "descending") {
        items = descendingSortByTag;
      }

      if (sortTags.direction === "ascending") {
        items = descendingSortByTag.reverse();
      }
    }

    if (sortTags.name === "popular" && sortTags.direction === "ascending") {
      items = items.sort(
        (firstItem: FetchedTagData, secondItem: FetchedTagData) =>
          firstItem.count - secondItem.count
      );
    }
  }
};
