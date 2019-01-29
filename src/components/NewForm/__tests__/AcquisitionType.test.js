import AcquisitionType from '../AcquisitionType';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(AcquisitionType, {});

describe('<AcquisitionType/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findWrap = wrapper.find('Select');
    expect(findWrap.exists()).toBe(true);
  });
});