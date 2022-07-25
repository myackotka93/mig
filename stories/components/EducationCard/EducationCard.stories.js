import EducationCard from "@/components/EducationCard/EducationCard";

export default {
  title: "components/EducationCard",
  component: EducationCard,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <EducationCard {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};