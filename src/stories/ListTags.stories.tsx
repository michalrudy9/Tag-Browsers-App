import type { Meta, StoryObj } from "@storybook/react";
import ListTags from "../components/ListTags";
import { fetchTags } from "../api/homePageFunctions";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof ListTags> = {
  title: "Tag Browser App/List Tags",
  component: ListTags,
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
      "Displays list of all tags. Single tag consist of name and amount of questions.",
  },
  render: (args, { loaded: { tags } }) => <ListTags {...args} tags={tags} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  loaders: [
    async () => ({
      tags: await fetchTags(),
    }),
  ],
};
