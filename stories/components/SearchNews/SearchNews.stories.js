import SearchNews from "@/components/SearchNews/SearchNews";

export default {
  title: "components/SearchNews",
  component: SearchNews,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <SearchNews {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};