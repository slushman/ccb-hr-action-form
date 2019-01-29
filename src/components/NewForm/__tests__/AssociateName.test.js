import AssociateName from '../AssociateName';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(AssociateName, {});

describe('<AssociateName/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('Input');
    expect(findInput.exists()).toBe(true);

    // nameAssociate exists
    const findNameAssociate = wrapper.find('[name="nameAssociate"]');
    expect(findNameAssociate.exists()).toBe(true);
  });
});