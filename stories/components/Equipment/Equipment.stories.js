import Equipment from "@/components/Equipment/Equipment";

export default {
  title: "components/Equipment",
  component: Equipment,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Equipment {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};