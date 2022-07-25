import Button from "@/components/Button/Button";

export default {
  title: "components/Button",
  component: Button,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Button {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};