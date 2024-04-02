import { Meta, StoryObj } from "@storybook/react";
import ErrorAlert from "../components/ErrorAlert";

const meta = {
  title: "Tag Browser App/Error",
  component: ErrorAlert,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays error message when something will go wrong while fetching tags.",
  },
} satisfies Meta<typeof ErrorAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertAbsolute: Story = {
  args: {
    message: "An error occurred!",
    position: "absolute",
  },
};

export const AlertRelative: Story = {
  args: {
    message: "An error occurred!",
    position: "relative",
  },
};
