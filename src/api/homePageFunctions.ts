import { FetchedTagData } from "../model/FetchedTagData";
import store from "../store/store";

let items: FetchedTagData[] = [];
let totalAmountData = 0;

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
  totalAmountData = items.length;

  checkWhichWasFirstSubmitter();

  return items;
};

const checkWhichWasFirstSubmitter = () => {
  const { firstSubmitter } = store.getState();

  if (firstSubmitter.submitter === "amount") {
    checkIfSortTags();
    checkIfSetAmountOfTags();
  }
  if (firstSubmitter.submitter === "sort") {
    checkIfSetAmountOfTags();
    checkIfSortTags();
  }
};

const checkIfSetAmountOfTags = () => {
  const { amountOfTags } = store.getState();
  const amount = amountOfTags.amount;

  if (amount !== "all") {
    const parseAmount = parseInt(amount);

    if (parseAmount) {
      setSuitableSplittedItemsArray();
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

const setSuitableSplittedItemsArray = () => {
  const chunkSize = parseInt(store.getState().amountOfTags.amount);
  const to = store.getState().rangeTags.to;
  const splittedItemsArray: FetchedTagData[][] = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    splittedItemsArray.push(chunk);
  }

  const index = to / chunkSize - 1;

  items = splittedItemsArray[index];
};

export const getAmountOfData = (): number => {
  return totalAmountData;
};
