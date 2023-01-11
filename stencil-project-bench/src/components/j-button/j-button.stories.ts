export default {
  title: 'Components/JButton',
  argTypes: {
    disabled: {
      type: 'boolean',
      defaultValue: false,
      description: 'Used to disable the button.',
    },
    variant: {
      type: 'select',
      options: ['outlined', 'contained'],
      defaultValue: 'outlined',
      description: 'Used to set the variant for the button.',
    }
  }
};

const Template = args => `<j-button variant="${args.variant}" type="${args.type}">${args.slot}</jbutton>`;

export const Outlined = Template.bind({});
Outlined.args = {
  disabled: false,
  variant: 'outlined',
  type: 'submit',
  slot: 'Hello World',
};
