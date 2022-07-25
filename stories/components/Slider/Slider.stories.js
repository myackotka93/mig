import Slider from "@/components/Slider/Slider";

export default {
  title: "components/Slider",
  component: Slider,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Slider {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};