import RequestType from '../RequestType';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(RequestType, {});

describe('<RequestType/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findSelect = wrapper.find('Select');
    expect(findSelect.exists()).toBe(true);

    // requestType exists
    const findRequestType = wrapper.find('[name="requestType"]');
    expect(findRequestType.exists()).toBe(true);
  });
});