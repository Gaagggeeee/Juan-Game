import Header from './header.svelte';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => ({
  Component: Header,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Header',
};