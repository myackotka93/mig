import LayoutLeft from "@/layouts/LayoutLeft/LayoutLeft";

export default {
  title: "Layots/LayoutLeft",
  component: LayoutLeft,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <LayoutLeft {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};