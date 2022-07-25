import Profile from "@/components/Profile/Profile";

export default {
  title: "components/Profile",
  component: Profile,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Profile {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};