import Counter from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    initialCount: 0,
  },
};

export const WithLimits = {
  args: {
    initialCount: 5,
    min: 0,
    max: 10,
  },
};