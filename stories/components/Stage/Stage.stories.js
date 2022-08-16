import Stage from "@/components/Stage/Stage";

export default {
  title: "components/Stage",
  component: Stage,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Stage {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};