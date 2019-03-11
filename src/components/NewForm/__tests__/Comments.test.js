import Comments from '../Comments';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(Comments, {});

describe('<Comments/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findWrap = wrapper.find('Textarea');
    expect(findWrap.exists()).toBe(true);
  });
});