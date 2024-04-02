import { Meta, StoryObj } from "@storybook/react";
import ProgressTags from "../components/progress/ProgressTags";

const meta = {
  title: "Tag Browser App/Progress/Tags",
  component: ProgressTags,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Displays placeholder skeleton for tag components.",
  },
} satisfies Meta<typeof ProgressTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
