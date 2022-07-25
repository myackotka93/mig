import Media from "@/components/Media/Media";

export default {
  title: "components/Media",
  component: Media,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Media {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};