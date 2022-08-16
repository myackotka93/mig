import Search from "@/components/Search/Search";

export default {
  title: "components/Search",
  component: Search,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Search {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};