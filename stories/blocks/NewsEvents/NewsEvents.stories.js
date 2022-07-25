import NewsEvents from "@/blocks/NewsEvents/NewsEvents";

export default {
  title: "blocks/NewsEvents",
  component: NewsEvents,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <NewsEvents {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};