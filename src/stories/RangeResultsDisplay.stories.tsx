import type { Meta, StoryObj } from "@storybook/react";
import RangeResultsDisaplay from "../components/RangeResultsDisplay";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../store/store";

const meta = {
  title: "Tag Browser App/Range Results Disaplay",
  component: RangeResultsDisaplay,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays an info about current page position and two buttons which are responsible for switching between tags pages.",
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
} satisfies Meta<typeof RangeResultsDisaplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
