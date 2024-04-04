import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "../components/SideBar";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Tag Browser App/Side Bar",
  component: SideBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Displays sidebar with return to all tags page.",
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
