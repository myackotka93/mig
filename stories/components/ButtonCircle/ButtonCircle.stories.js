import ButtonCircle from "@/components/ButtonCircle/ButtonCircle";

export default {
  title: "components/ButtonCircle",
  component: ButtonCircle,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <ButtonCircle {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};