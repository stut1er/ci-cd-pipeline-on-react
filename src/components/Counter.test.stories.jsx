import { userEvent, within } from '@storybook/test';

export const InteractiveTest = {
  args: {
    initialCount: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('increment-btn'));
    await canvas.findByText('Счётчик: 4');
    await userEvent.click(canvas.getByTestId('decrement-btn'));
    await canvas.findByText('Счётчик: 3');
  },
};