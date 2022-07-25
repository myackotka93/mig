import Partners from "@/blocks/main/Partners/Partners";

export default {
  title: "blocks/main/Partners",
  component: Partners,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Partners {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};