import NewPositionFields from '../NewPositionFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(NewPositionFields, {});

describe('<NewPositionFields/>', () => {
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
    expect(placeholderContent).toBe('New Position');

    // team exists
    const findTeam = wrapper.find('[name="team"]');
    expect(findTeam.exists()).toBe(true);

    // role exists
    const findRole = wrapper.find('[name="role"]');
    expect(findRole.exists()).toBe(true);

    // hiringLead exists
    const findHiringLead = wrapper.find('[name="hiringLead"]');
    expect(findHiringLead.exists()).toBe(true);

    // salary exists
    const findSalary = wrapper.find('[name="salary"]');
    expect(findSalary.exists()).toBe(true);

    // status exists
    const findStatus = wrapper.find('[name="status"]');
    expect(findStatus.exists()).toBe(true);

    // flsaClassification exists
    const findFlsaClassification = wrapper.find('[name="flsaClassification"]');
    expect(findFlsaClassification.exists()).toBe(true);

    // datePosted exists
    const findDatePosted = wrapper.find('[name="datePosted"]');
    expect(findDatePosted.exists()).toBe(true);

    // dateClosed exists
    const findDateClosed = wrapper.find('[name="dateClosed"]');
    expect(findDateClosed.exists()).toBe(true);

    // dateFilled exists
    const findDateFilled = wrapper.find('[name="dateFilled"]');
    expect(findDateFilled.exists()).toBe(true);
  });
});