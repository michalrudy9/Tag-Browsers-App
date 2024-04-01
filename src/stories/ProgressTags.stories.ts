import { Meta, StoryObj } from "@storybook/react";
import ProgressTags from "../components/progress/ProgressTags";

const meta = {
  title: "Tag Browser App/Progress/Tags",
  component: ProgressTags,
} satisfies Meta<typeof ProgressTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
