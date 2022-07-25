import Header from "@/blocks/Header/Header";

export default {
  title: "blocks/Header",
  component: Header,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Header {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};