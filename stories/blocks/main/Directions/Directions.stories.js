import Directions from "@/blocks/main/Directions/Directions";

export default {
  title: "blocks/main/Directions",
  component: Directions,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Directions {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};