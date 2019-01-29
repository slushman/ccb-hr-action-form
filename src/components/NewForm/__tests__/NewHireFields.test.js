import NewHireFields from '../NewHireFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(NewHireFields, {
  values: {

  },
});

describe('<NewHireFields/>', () => {
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
    expect(placeholderContent).toBe('New Hire');

    // team exists
    const findTeam = wrapper.find('[name="team"]');
    expect(findTeam.exists()).toBe(true);

    // role exists
    const findRole = wrapper.find('[name="role"]');
    expect(findRole.exists()).toBe(true);

    // salary exists
    const findSalary = wrapper.find('[name="salary"]');
    expect(findSalary.exists()).toBe(true);

    // dateBirth exists
    const findDateBirth = wrapper.find('[name="dateBirth"]');
    expect(findDateBirth.exists()).toBe(true);

    // dateHire exists
    const findDateHire = wrapper.find('[name="dateHire"]');
    expect(findDateHire.exists()).toBe(true);

    // teamLead exists
    const findTeamLead = wrapper.find('[name="teamLead"]');
    expect(findTeamLead.exists()).toBe(true);

    // status exists
    const findStatus = wrapper.find('[name="status"]');
    expect(findStatus.exists()).toBe(true);

    // flsaClassification exists
    const findFlsaClassification = wrapper.find('[name="flsaClassification"]');
    expect(findFlsaClassification.exists()).toBe(true);
  });
});