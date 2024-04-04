import type { Meta, StoryObj } from "@storybook/react";
import QuestionTags from "../components/listQuestions/QuestionTags";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Tag Browser App/List Questions/Question Tags",
  component: QuestionTags,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays a list of tags in which the question should be displayed.",
  },
} satisfies Meta<typeof QuestionTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    tags: ["js", "ios", "react", "php", "kotlin", "angular"],
  },
};
