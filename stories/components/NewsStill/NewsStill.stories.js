import NewsStill from "@/components/NewsStill/NewsStill";

export default {
  title: "components/NewsStill",
  component: NewsStill,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <NewsStill {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};