import Select from '../Select';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(Select, {
  label: '',
  name: '',
  options: [],
});

describe('<Select/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Wrapper exists
    const findWrap = wrapper.find('SelectWrap');
    expect(findWrap.exists()).toBe(true);

    // Select exists
    const findSelect = wrapper.find('StyledSelect');
    expect(findSelect.exists()).toBe(true);

    // Label exists
    const findLabel = wrapper.find('SelectLabel');
    expect(findLabel.exists()).toBe(true);

    // placeholder = - Select -
    const findPlaceholderOption = wrapper.find('[value=""]');
    expect(findPlaceholderOption.exists()).toBe(true);

    // placeholder = Select an option
    const placeholderContent = findPlaceholderOption.children().text();
    expect(placeholderContent).toBe('- Select -');
  });

  const testProps = {
    label: 'This is a field',
    name: 'myIdField',
    options: [
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
    ],
    placeholder: 'Select an option',
  };

  it('label equals This is a field', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Label exists
    const findLabel = wrapper.find('SelectLabel');
    expect(findLabel.exists()).toBe(true);

    // label content = This is a field
    const initials = findLabel.children().text();
    expect(initials).toBe(testProps.label);
  });

  it('name is myIdField', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findSelect = wrapper.find('StyledSelect');
    expect(findSelect.exists()).toBe(true);

    // type = number
    expect(findSelect.prop('name')).toBe(testProps.name);
  });

  it('placeholder is Select an option', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findSelect = wrapper.find('StyledSelect');
    expect(findSelect.exists()).toBe(true);

    // Placeholder option exists
    const findPlaceholderOption = wrapper.find('[value=""]');
    expect(findPlaceholderOption.exists()).toBe(true);

    // placeholder = Select an option
    const placeholderContent = findPlaceholderOption.children().text();
    expect(placeholderContent).toBe(testProps.placeholder);
  });

  it('has requested options', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findSelect = wrapper.find('StyledSelect');
    expect(findSelect.exists()).toBe(true);

    // Yes option exists
    const findYesOption = wrapper.find('[value="yes"]');
    expect(findYesOption.exists()).toBe(true);

    // No option exists
    const findNoOption = wrapper.find('[value="no"]');
    expect(findNoOption.exists()).toBe(true);
  });
});