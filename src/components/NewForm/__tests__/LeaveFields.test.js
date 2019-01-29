import LeaveFields from '../LeaveFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(LeaveFields, {
  values: {

  },
});

describe('<LeaveFields/>', () => {
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
    expect(placeholderContent).toBe('Leave');

    // Select exists
    const findSelect = wrapper.find('Select');
    expect(findSelect.exists()).toBe(true);

    // dateLeaveReturn exists
    const findDateLeaveReturn = wrapper.find('[name="dateLeaveReturn"]');
    expect(findDateLeaveReturn.exists()).toBe(true);

    // leavePtoHours exists
    const findLeavePtoHours = wrapper.find('[name="leavePtoHours"]');
    expect(findLeavePtoHours.exists()).toBe(true);

    // otherExplanation does not exist
    const findOtherExplanation = wrapper.find('[name="otherExplanation"]');
    expect(findOtherExplanation.exists()).toBe(false);
  });

  describe('when leave type is other', () => {
    const otherLeaveTypeProps = {
      values: {
        leaveType: 'other',
      },
    };
    it('shows the Leave PTO Hours field', () => {
      const wrapper = factory(otherLeaveTypeProps);
      expect(wrapper.exists()).toBe(true);

      // otherExplanation exists
      const findOtherExplanation = wrapper.find('[name="otherExplanation"]');
      expect(findOtherExplanation.exists()).toBe(true);

      // numberOfDays does not exist
      const findNumberOfDays = wrapper.find('[name="numberOfDays"]');
      expect(findNumberOfDays.exists()).toBe(false);
    });
  });

  describe('when leave type is james127', () => {
    const otherLeaveTypeProps = {
      values: {
        leaveType: 'james127',
      },
    };
    it('shows the numberOfDays field', () => {
      const wrapper = factory(otherLeaveTypeProps);
      expect(wrapper.exists()).toBe(true);

      // otherExplanation exists
      const findOtherExplanation = wrapper.find('[name="otherExplanation"]');
      expect(findOtherExplanation.exists()).toBe(false);

      // numberOfDays exists
      const findNumberOfDays = wrapper.find('[name="numberOfDays"]');
      expect(findNumberOfDays.exists()).toBe(true);
    });
  });
});