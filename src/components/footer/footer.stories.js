import Footer from './footer.svelte';

export default {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
  },
};

const Template = (args) => ({
  Component: Footer,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Footer',
};