import EmploymentType from '../EmploymentType';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(EmploymentType, {});

describe('<EmploymentType/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findSelect = wrapper.find('Select');
    expect(findSelect.exists()).toBe(true);

    // employmentType exists
    const findEmploymentType = wrapper.find('[name="employmentType"]');
    expect(findEmploymentType.exists()).toBe(true);
  });
});