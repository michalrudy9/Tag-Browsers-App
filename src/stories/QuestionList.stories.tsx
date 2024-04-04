import { Meta, StoryObj } from "@storybook/react";
import ListQuestions from "../components/listQuestions/ListQuestions";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Tag Browser App/List Questions/List Questions",
  component: ListQuestions,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Displays list of questions ",
  },
} satisfies Meta<typeof ListQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    questions: [
      {
        question_id: 78249179,
        answers_count: 0,
        link: "https://stackoverflow.com/questions/78249179/my-react-app-executes-both-operands-of-the-ternary-operator",
        owner: {
          display_name: "Aland Ameer",
          link: "https://stackoverflow.com/users/18235491/aland-ameer",
          profile_image:
            "https://www.gravatar.com/avatar/5136197c5611b3a3b339094a25c65264?s=256&d=identicon&r=PG",
        },
        score: 0,
        tags: [
          "javascript",
          "reactjs",
          "firebase-authentication",
          "conditional-rendering",
        ],
        title: "My react app executes both operands of the ternary operator",
        view_count: 1,
      },
    ],
  },
};
