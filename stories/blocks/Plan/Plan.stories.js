import Plan from "@/blocks/Plan/Plan";

export default {
  title: "blocks/Plan",
  component: Plan,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Plan {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};