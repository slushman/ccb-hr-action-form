import AddRoleFields from '../AddRoleFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(AddRoleFields, {});

describe('<AddRoleFields/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Fieldset exists
    const findFieldset = wrapper.find('Fieldset');
    expect(findFieldset.exists()).toBe(true);

    // Legend exists
    const findLegend = findFieldset.find('Legend');
    expect(findLegend.exists()).toBe(true);

    // Legend has correct text
    const placeholderContent = findLegend.children().text();
    expect(placeholderContent).toBe('Add Role');

    // nameNewRole exists
    const findNameNewRole = findFieldset.find('[name="nameNewRole"]');
    expect(findNameNewRole.exists()).toBe(true);

    // statusNewRole exists
    const findStatusNewRole = findFieldset.find('[name="statusNewRole"]');
    expect(findStatusNewRole.exists()).toBe(true);

    // flsaClassificationNewRole exists
    const findFlsaClassificationNewRole = findFieldset.find('[name="flsaClassificationNewRole"]');
    expect(findFlsaClassificationNewRole.exists()).toBe(true);
  });
});