import QuoteItem from "@/blocks/QuoteItem/QuoteItem";

export default {
  title: "blocks/QuoteItem",
  component: QuoteItem,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <QuoteItem {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};