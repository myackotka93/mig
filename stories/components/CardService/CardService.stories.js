import CardService from "@/components/CardService/CardService";

export default {
  title: "components/CardService",
  component: CardService,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <CardService {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};