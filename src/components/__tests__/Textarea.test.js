import Textarea from '../Textarea';
import { shallowFactory } from '../../testUtils';

const factory = shallowFactory(Textarea, {
  label: '',
  name: '',
});

describe('<Textarea/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
    console.log(wrapper.debug());

    // Wrapper exists
    const findWrap = wrapper.find('TextareaWrap');
    expect(findWrap.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('TextareaElement');
    expect(findInput.exists()).toBe(true);

    // Label exists
    const findLabel = wrapper.find('TextareaLabel');
    expect(findLabel.exists()).toBe(true);
  });

  const testProps = {
    cols: 25,
    id: 'myId',
    label: 'This is a field',
    name: 'myIdField',
    rows: 55,
  };

  it('has 25 cols', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Textarea exists
    const findInput = wrapper.find('TextareaElement');
    expect(findInput.exists()).toBe(true);

    // cols = 25
    expect(findInput.prop('cols')).toBe(testProps.cols);
  });

  it('id is myId', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('TextareaElement');
    expect(findInput.exists()).toBe(true);

    // type = number
    expect(findInput.prop('id')).toBe(testProps.id);
  });

  it('label equals This is a field', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Label exists
    const findLabel = wrapper.find('TextareaLabel');
    expect(findLabel.exists()).toBe(true);

    // label content = This is a field
    const initials = findLabel.children().text();
    expect(initials).toBe(testProps.label);
  });

  it('name is myIdField', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Textarea exists
    const findInput = wrapper.find('TextareaElement');
    expect(findInput.exists()).toBe(true);

    // type = number
    expect(findInput.prop('name')).toBe(testProps.name);
  });

  it('has 55 rows', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // Textarea exists
    const findInput = wrapper.find('TextareaElement');
    expect(findInput.exists()).toBe(true);

    // rows = 55
    expect(findInput.prop('rows')).toBe(testProps.rows);
  });
});