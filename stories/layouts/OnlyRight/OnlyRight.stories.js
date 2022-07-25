import OnlyRight from "@/layouts/OnlyRight/OnlyRight";

export default {
  title: "layouts/OnlyRight",
  component: OnlyRight,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <OnlyRight {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};