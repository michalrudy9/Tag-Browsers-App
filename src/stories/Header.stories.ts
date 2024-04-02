import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

const meta = {
  title: "Tag Browser App/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Displays header of page.",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
