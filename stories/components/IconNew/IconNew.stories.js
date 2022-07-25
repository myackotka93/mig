import IconNew from "@/components/IconNew/IconNew";

export default {
  title: "components/IconNew",
  component: IconNew,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <IconNew {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};