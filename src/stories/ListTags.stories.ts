import type { Meta, StoryObj } from "@storybook/react";
import ListTags from "../components/ListTags";

const meta: Meta<typeof ListTags> = {
  title: "Tag Browser App/List Tags",
  component: ListTags,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    tags: [],
  },
};
