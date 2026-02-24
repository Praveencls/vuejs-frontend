import type { Meta, StoryFn } from '@storybook/vue3';
import UserList from './UserList.vue';

const meta: Meta<typeof UserList> = {
  title: 'User/UserList',
  component: UserList,
};

export default meta;

const Template: StoryFn<typeof UserList> = (args) => ({
  components: { UserList },
  setup() { return { args }; },
  template: '<UserList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
