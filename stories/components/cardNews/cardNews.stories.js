import CardNews from "@/components/CardNews/CardNews";

export default {
  title: "components/CardNews",
  component: CardNews,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <CardNews {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};