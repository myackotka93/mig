import InfoPlan from "@/components/InfoPlan/InfoPlan";

export default {
  title: "components/InfoPlan",
  component: InfoPlan,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <InfoPlan {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};