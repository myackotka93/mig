import DirectionsItem from "@/components/DirectionsItem/DirectionsItem";

export default {
  title: "components/DirectionsItem",
  component: DirectionsItem,

  argTypes: {},
  args: {
    title: 'Лучевая теропия'
  }
};

const Template = (args) => (
  <div className="wrapper">
    <DirectionsItem {...args} />
  </div>
)


export const Default = Template.bind({})

Default.args = {
};

export const WithImage = Template.bind({})

WithImage.args = {
  img: '/images/direction.jpg'
};