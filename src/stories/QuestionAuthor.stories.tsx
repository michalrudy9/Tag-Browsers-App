import type { Meta, StoryObj } from "@storybook/react";
import QuestionAuthor from "../components/listQuestions/QuestionAuthor";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Tag Browser App/List Questions/Question Author",
  component: QuestionAuthor,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays the question owner which includes name, profile image and link to owner profile.",
  },
} satisfies Meta<typeof QuestionAuthor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    owner: {
      display_name: "Aland Ameer",
      profile_image:
        "https://www.gravatar.com/avatar/5136197c5611b3a3b339094a25c65264?s=256&d=identicon&r=PG",
      link: "https://stackoverflow.com/users/18235491/aland-ameer",
    },
  },
};
