import TransferPromotionFields from '../TransferPromotionFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(TransferPromotionFields, {});

describe('<TransferPromotionFields/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Fieldset exists
    const findFieldset = wrapper.find('Fieldset');
    expect(findFieldset.exists()).toBe(true);

    // Legend exists
    const findLegend = findFieldset.find('Legend');
    expect(findLegend.exists()).toBe(true);

    // First Legend has correct text
    const firstPlaceholderContent = findLegend.at(0).children().text();
    expect(firstPlaceholderContent).toBe('Transfers and Promotions');

    // Second Legend has correct text
    const secondPlaceholderContent = findLegend.at(1).children().text();
    expect(secondPlaceholderContent).toBe('Previous Role');

    // Third Legend has correct text
    const thirdPlaceholderContent = findLegend.at(2).children().text();
    expect(thirdPlaceholderContent).toBe('New Role');

    // namePreviousRole exists
    const findNamePreviousRole = findFieldset.find('[name="namePreviousRole"]');
    expect(findNamePreviousRole.exists()).toBe(true);

    // salaryPrevious exists
    const findSalaryPrevious = findFieldset.find('[name="salaryPrevious"]');
    expect(findSalaryPrevious.exists()).toBe(true);

    // flsaClassificationPrevious exists
    const findFlsaClassificationPrevious = findFieldset.find('[name="flsaClassificationPrevious"]');
    expect(findFlsaClassificationPrevious.exists()).toBe(true);

    // teamLeadPrevious exists
    const findTeamLeadPrevious = findFieldset.find('[name="teamLeadPrevious"]');
    expect(findTeamLeadPrevious.exists()).toBe(true);

    // nameNewRole exists
    const findNameNewRole = findFieldset.find('[name="nameNewRole"]');
    expect(findNameNewRole.exists()).toBe(true);

    // salaryNew exists
    const findSalaryNew = findFieldset.find('[name="salaryNew"]');
    expect(findSalaryNew.exists()).toBe(true);

    // flsaClassificationNewRole exists
    const findFlsaClassificationNewRole = findFieldset.find('[name="flsaClassificationNewRole"]');
    expect(findFlsaClassificationNewRole.exists()).toBe(true);

    // teamLeadNew exists
    const findTeamLeadNew = findFieldset.find('[name="teamLeadNew"]');
    expect(findTeamLeadNew.exists()).toBe(true);
  });
});