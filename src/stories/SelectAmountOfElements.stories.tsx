import type { Meta, StoryObj } from "@storybook/react";
import SelectAmountOfElements from "../components/SelectAmountOfElements";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../store/store";

const meta = {
  title: "Tag Browser App/Select Amount of Elements",
  component: SelectAmountOfElements,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "Displays a select field by which the user can choose how many elements will dysplaying by page.",
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
} satisfies Meta<typeof SelectAmountOfElements>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
