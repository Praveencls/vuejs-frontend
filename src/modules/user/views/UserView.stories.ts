import type { Meta, StoryFn } from '@storybook/vue3';
import UserView from '../views/UserView.vue';

const meta: Meta<typeof UserView> = {
  title: 'User/UserView',
  component: UserView,
};

export default meta;

const Template: StoryFn<typeof UserView> = (args) => ({
  components: { UserView },
  setup() { return { args }; },
  template: '<UserView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
