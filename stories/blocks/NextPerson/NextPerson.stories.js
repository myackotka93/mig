import NextPerson from "@/blocks/NextPerson/NextPerson";

export default {
  title: "blocks/NextPerson",
  component: NextPerson,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <NextPerson {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};