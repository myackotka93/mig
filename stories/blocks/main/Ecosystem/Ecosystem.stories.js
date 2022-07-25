import Ecosystem from "@/blocks/main/Ecosystem/Ecosystem";

export default {
  title: "blocks/main/Ecosystem",
  component: Ecosystem,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Ecosystem {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};