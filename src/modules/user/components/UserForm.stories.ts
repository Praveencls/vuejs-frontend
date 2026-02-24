import type { Meta, StoryFn } from '@storybook/vue3';
import UserForm from './UserForm.vue';

const meta: Meta<typeof UserForm> = {
  title: 'User/UserForm',
  component: UserForm,
};

export default meta;

const Template: StoryFn<typeof UserForm> = (args) => ({
  components: { UserForm },
  setup() { return { args }; },
  template: '<UserForm v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
