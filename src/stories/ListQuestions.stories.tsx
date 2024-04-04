import { Meta, StoryObj } from "@storybook/react";
import ListQuestions from "../components/listQuestions/ListQuestions";
import { MemoryRouter } from "react-router-dom";
import { fetchPosts } from "../api/tagDetailPageFunctions";

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
  render: (args, { loaded: { questions } }) => <ListQuestions {...args} questions={questions} />,
} satisfies Meta<typeof ListQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  loaders: [
    async () => ({
      questions: await fetchPosts('javascript'),
    }),
  ],
};
