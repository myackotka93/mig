import MassMedia from "@/blocks/MassMedia/MassMedia";

export default {
  title: "blocks/MassMedia",
  component: MassMedia,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <MassMedia {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};