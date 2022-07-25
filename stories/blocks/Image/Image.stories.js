import Image from "@/blocks/Image/Image";

export default {
  title: "blocks/Image",
  component: Image,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Image {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};