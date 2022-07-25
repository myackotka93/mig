import Person from "@/components/Person/Person";

export default {
  title: "components/Person",
  component: Person,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Person {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};