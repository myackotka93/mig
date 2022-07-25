import Icon from "@/components/Icon/Icon";

export default {
  title: "components/Icon",
  component: Icon,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Icon {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};