import EmptyButton from "@/components/buttons/EmptyButton/EmptyButton";

export default {
  title: "components/buttons/EmptyButton",
  component: EmptyButton,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <EmptyButton {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};