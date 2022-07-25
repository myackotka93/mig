import PlateButton from "@/components/buttons/PlateButton/PlateButton";

export default {
  title: "components/buttons/PlateButton",
  component: PlateButton,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <PlateButton {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};