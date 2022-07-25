import Divider from "@/components/Divider/Divider";

export default {
  title: "components/Divider",
  component: Divider,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Divider {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};