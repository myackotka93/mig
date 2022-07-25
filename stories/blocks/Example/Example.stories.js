import Example from "@/blocks/Example/Example";

export default {
  title: "blocks/Example",
  component: Example,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Example {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};