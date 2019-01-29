import Comments from '../Comments';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(Comments, {});

describe('<Comments/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Textarea exists
    const findTextarea = wrapper.find('Textarea');
    expect(findTextarea.exists()).toBe(true);

    // nameNewRole exists
    const findComments = wrapper.find('[name="comments"]');
    expect(findComments.exists()).toBe(true);
  });
});