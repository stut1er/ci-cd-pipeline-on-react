import Counter from './Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
};

export const Default = {
  args: {
    initialCount: 0,
  },
};

export const WithInitialValue = {
  args: {
    initialCount: 10,
  },
};