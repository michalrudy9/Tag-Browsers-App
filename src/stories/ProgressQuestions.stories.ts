import { Meta, StoryObj } from "@storybook/react";
import ProgressQuestions from "../components/progress/ProgressQuestions";

const meta = {
  title: "Tag Browser App/Progress/Questions",
  component: ProgressQuestions,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Displays placeholder skeleton for question components.",
  },
} satisfies Meta<typeof ProgressQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
