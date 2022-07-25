import LayoutRight from "@/layouts/LayoutRight/LayoutRight";

export default {
  title: "Layots/LayoutRight",
  component: LayoutRight,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <LayoutRight {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};