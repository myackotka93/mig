import Advantages from "@/components/Advantages/Advantages";

export default {
  title: "components/Advantages",
  component: Advantages,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Advantages {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};