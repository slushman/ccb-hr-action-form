import Input from '../Input';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(Input, {
  label: '',
  name: '',
});

describe('<Input/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Wrapper exists
    const findWrap = wrapper.find('InputWrap');
    expect(findWrap.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('InputElement');
    expect(findInput.exists()).toBe(true);

    // Label exists
    const findLabel = wrapper.find('InputLabel');
    expect(findLabel.exists()).toBe(true);

    // type = text
    expect(findInput.prop('type')).toBe('text');
  });

  const testProps = {
    id: 'myId',
    label: 'This is a field',
    name: 'myIdField',
    placeholder: 'This is a placeholder',
    type: 'number',
  };

  it('id is myId', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('InputElement');
    expect(findInput.exists()).toBe(true);

    // type = number
    expect(findInput.prop('id')).toBe(testProps.id);
  });

  it('label equals This is a field', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Label exists
    const findLabel = wrapper.find('InputLabel');
    expect(findLabel.exists()).toBe(true);

    // label content = This is a field
    const initials = findLabel.children().text();
    expect(initials).toBe(testProps.label);
  });

  it('name is myIdField', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('InputElement');
    expect(findInput.exists()).toBe(true);

    // type = number
    expect(findInput.prop('name')).toBe(testProps.name);
  });

  it('placeholder is This is a placeholder', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('InputElement');
    expect(findInput.exists()).toBe(true);

    // type = number
    expect(findInput.prop('placeholder')).toBe(testProps.placeholder);
  });

  it('has number type', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('InputElement');
    expect(findInput.exists()).toBe(true);

    // type = number
    expect(findInput.prop('type')).toBe(testProps.type);
  });
});