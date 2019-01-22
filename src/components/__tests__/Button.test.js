import Button from '../Button';
import { shallowFactory } from '../../testUtils';

const factory = shallowFactory(Button);

describe('<Button/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // label = Submit
    const labelContent = wrapper.children().text();
    expect(labelContent).toBe('Submit');

    // type = submit
    expect(wrapper.prop('type')).toBe('submit');
  });

  const testProps = {
    className: 'btn-test',
    label: 'Test Button',
    type: 'reset',
  };

  it('classes include btn-test', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // classes include btn-test
    expect(wrapper.hasClass(testProps.className)).toBe(true);
  });

  it('label equals Test Button', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // label content = This is a field
    const labelContent = wrapper.children().text();
    expect(labelContent).toBe(testProps.label);
  });

  it('type is reset', () => {
    const wrapper = factory(testProps);
    expect(wrapper.exists()).toBe(true);

    // type = number
    expect(wrapper.prop('type')).toBe(testProps.type);
  });
});

