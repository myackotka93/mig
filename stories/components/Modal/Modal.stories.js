import Modal from "@/components/Modal/Modal";

export default {
  title: "components/Modal",
  component: Modal,

  argTypes: {},
};

const Template = (args) => <div className="wrapper">
  <Modal {...args} />
</div>


export const Default = Template.bind({})

Default.args = {
};