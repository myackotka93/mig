import IconPlan from "@/components/IconPlan/IconPlan";

export default {
  title: "components/IconPlan",
  component: IconPlan,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <IconPlan {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};