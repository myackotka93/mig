import Promo from "@/blocks/Promo/Promo";

export default {
  title: "blocks/Promo",
  component: Promo,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Promo {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};