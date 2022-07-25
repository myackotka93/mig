import BigCard from "@/components/BigCard/BigCard";

export default {
  title: "components/BigCard",
  component: BigCard,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <BigCard {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};