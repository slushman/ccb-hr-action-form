import RoleChangeFields from '../RoleChangeFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(RoleChangeFields, {});

describe('<RoleChangeFields/>', () => {
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
    expect(placeholderContent).toBe('Role Change');

    // roleName exists
    const findRoleName = findFieldset.find('[name="roleName"]');
    expect(findRoleName.exists()).toBe(true);

    // newRate exists
    const findNewRate = findFieldset.find('[name="newRate"]');
    expect(findNewRate.exists()).toBe(true);

    // statusNewRole exists
    const findStatusNewRole = findFieldset.find('[name="statusNewRole"]');
    expect(findStatusNewRole.exists()).toBe(true);

    // flsaClassificationNewRole exists
    const findFlsaClassificationNewRole = findFieldset.find('[name="flsaClassificationNewRole"]');
    expect(findFlsaClassificationNewRole.exists()).toBe(true);
  });
});