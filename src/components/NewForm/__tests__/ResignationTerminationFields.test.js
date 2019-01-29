import ResignationTerminationFields from '../ResignationTerminationFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(ResignationTerminationFields, {
  values: {

  },
});

describe('<ResignationTerminationFields/>', () => {
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
    expect(placeholderContent).toBe('Resignation or Termination');

    // Select exists
    const findSelect = wrapper.find('Select');
    expect(findSelect.exists()).toBe(true);

    // notRehirable does not exist
    const findNotRehirable = wrapper.find('[name="notRehirable"]');
    expect(findNotRehirable.exists()).toBe(false);
  });

  describe('when rehireEligibility is no', () => {
    const otherLeaveTypeProps = {
      values: {
        rehireEligibility: 'no',
      },
    };
    it('shows the notRehirable field', () => {
      const wrapper = factory(otherLeaveTypeProps);
      expect(wrapper.exists()).toBe(true);

      // otherExplanation exists
      const findNotRehirable = wrapper.find('[name="notRehirable"]');
      expect(findNotRehirable.exists()).toBe(true);
    });
  });
});
