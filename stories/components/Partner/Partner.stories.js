import Partner from "@/components/Partner/Partner";

export default {
  title: "components/Partner",
  component: Partner,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Partner {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};