import FormName from '../FormName';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(FormName, {});

describe('<FormName/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('Input');
    expect(findInput.exists()).toBe(true);

    // formName exists
    const findFormName = wrapper.find('[name="formName"]');
    expect(findFormName.exists()).toBe(true);
  });
});