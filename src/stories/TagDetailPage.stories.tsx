import type { Meta, StoryObj } from "@storybook/react";

import TagDetailPage from "../pages/TagDetailPage";
import { Provider } from "react-redux";
import store from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Tag Browser App/Pages/Tag Detail Page",
  component: TagDetailPage,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <MemoryRouter>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <Story />
            </QueryClientProvider>
          </Provider>
        </MemoryRouter>
      );
    },
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof TagDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagDetail: Story = {};
