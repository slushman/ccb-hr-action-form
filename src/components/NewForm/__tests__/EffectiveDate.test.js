import EffectiveDate from '../EffectiveDate';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(EffectiveDate, {});

describe('<EffectiveDate/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Input exists
    const findInput = wrapper.find('Input');
    expect(findInput.exists()).toBe(true);

    // nameNewRole exists
    const findDateEffective = wrapper.find('[name="dateEffective"]');
    expect(findDateEffective.exists()).toBe(true);
  });
});