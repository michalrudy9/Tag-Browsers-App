import type { Meta, StoryObj } from "@storybook/react";
import QuestionStatistics from "../components/listQuestions/QuestionStatistics";

const meta = {
  title: "Tag Browser App/List Questions/Question Statistics",
  component: QuestionStatistics,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays statistics about score of question, amount of answers on question and quantity of question views.",
  },
} satisfies Meta<typeof QuestionStatistics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    score: 1,
    answersCount: 2,
    viewCount: 3,
  },
};
