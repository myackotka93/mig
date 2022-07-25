import Directions from "@/blocks/Directions/Directions";

export default {
  title: "blocks/Directions",
  component: Directions,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Directions {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};