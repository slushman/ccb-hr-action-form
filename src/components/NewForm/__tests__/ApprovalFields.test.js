import ApprovalFields from '../ApprovalFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(ApprovalFields, {
  values: {

  },
});

describe('<ApprovalFields/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  it ('includes the leadership team select field', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findLT = wrapper.find('Select');
    expect(findLT.exists()).toBe(true);
  });
});