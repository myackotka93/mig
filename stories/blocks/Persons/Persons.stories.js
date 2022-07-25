import Persons from "@/blocks/Persons/Persons";

export default {
  title: "blocks/Persons",
  component: Persons,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Persons {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};