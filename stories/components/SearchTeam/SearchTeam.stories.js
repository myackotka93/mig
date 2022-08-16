import SearchTeam from "@/components/SearchTeam/SearchTeam";

export default {
  title: "components/SearchTeam",
  component: SearchTeam,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <SearchTeam {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};