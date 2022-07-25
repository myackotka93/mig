import Quote from "@/components/Quote/Quote";

export default {
  title: "components/Quote",
  component: Quote,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Quote {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};