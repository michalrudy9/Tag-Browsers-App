import type { Meta, StoryObj } from "@storybook/react";
import SortTags from "../components/SortTags";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../store/store";

const meta = {
  title: "Tag Browser App/Sort Tags",
  component: SortTags,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays a select field by which the user can choose which field the data will be sorted by.",
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </Provider>
      );
    },
  ],
} satisfies Meta<typeof SortTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
