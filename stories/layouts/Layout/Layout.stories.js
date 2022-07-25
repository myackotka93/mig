import Layout from "@/layouts/Layout/Layout";

export default {
  title: "Layots/Layout",
  component: Layout,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Layout {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};