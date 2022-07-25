import Footer from "@/blocks/Footer/Footer";

export default {
  title: "blocks/Footer",
  component: Footer,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Footer {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};