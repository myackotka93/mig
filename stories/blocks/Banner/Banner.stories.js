import Banner from "@/blocks/Banner/Banner";

export default {
  title: "blocks/Banner",
  component: Banner,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Banner {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};