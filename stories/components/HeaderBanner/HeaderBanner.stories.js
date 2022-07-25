import HeaderBanner from "@/components/HeaderBanner/HeaderBanner";

export default {
  title: "components/HeaderBanner",
  component: HeaderBanner,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <HeaderBanner {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};