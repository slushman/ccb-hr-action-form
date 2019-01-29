import ApprovalFields from '../ApprovalFields';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(ApprovalFields, {
  values: {

  },
});

describe('<ApprovalFields/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  it ('includes the leadership team select and hr fields, but not finance, ceo, it, and facilties', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findLT = wrapper.find('Select');
    expect(findLT.exists()).toBe(true);

    // HR Hidden Input exists
    const findHRApproval = wrapper.find('[name="approvals[hr]"]');
    expect(findHRApproval.exists()).toBe(true);

    // Finance Hidden Input does not exist
    const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
    expect(findFinanceApproval.exists()).toBe(false);

    // CEO Hidden Input does not exist
    const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
    expect(findCEOApproval.exists()).toBe(false);

    // IT Hidden Input exists
    const findITApproval = wrapper.find('[name="approvals[it]"]');
    expect(findITApproval.exists()).toBe(false);

    // Facilities Hidden Input exists
    const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
    expect(findFacilitiesApproval.exists()).toBe(false);
  });


  describe( 'When the request type is employment', () => {
    const employmentRequest = {
      values: {
        requestType: 'employment'
      },
    };

    it('includes hr and finance fields, but not CEO, it, or facilities', () => {
      const wrapper = factory(employmentRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(true);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(false);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });


  describe( 'When the request type is employment and employment type is new-hire', () => {
    const newHireRequest = {
      values: {
        requestType: 'employment',
        employmentType: 'new-hire',
      },
    };

    it('includes hr, finance, it, and facilities fields, but not CEO', () => {
      const wrapper = factory(newHireRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(true);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(false);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(true);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(true);
    });
  });



  describe( 'When the request type is employment and employment type is rehire', () => {
    const rehireRequest = {
      values: {
        requestType: 'employment',
        employmentType: 'rehire',
      },
    };

    it('includes hr, finance, it, and facilities fields, but not CEO', () => {
      const wrapper = factory(rehireRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(true);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(false);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(true);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(true);
    });
  });



  describe( 'When the request type is add-role', () => {
    const addRoleRequest = {
      values: {
        requestType: 'add-role'
      },
    };

    it('includes hr, finance, and CEO fields, but not it and facilities', () => {
      const wrapper = factory(addRoleRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(true);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(true);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });

  describe( 'When the request type is role-change', () => {
    const addRoleRequest = {
      values: {
        requestType: 'role-change'
      },
    };

    it('includes hr field, but not finance, CEO, it, and facilities', () => {
      const wrapper = factory(addRoleRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(false);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(false);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });



  describe( 'When the request type is leave', () => {
    const addRoleRequest = {
      values: {
        requestType: 'leave'
      },
    };

    it('includes hr and finance fields, but not CEO, it, and facilities', () => {
      const wrapper = factory(addRoleRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(true);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(false);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });



  describe( 'When the request type is transfer-promotion', () => {
    const addRoleRequest = {
      values: {
        requestType: 'transfer-promotion'
      },
    };

    it('includes hr field, but not finance, ceo, it, and facilities', () => {
      const wrapper = factory(addRoleRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(false);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(true);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });



  describe( 'When the request type is talent-acquisition and the acquisition type is new-position', () => {
    const addRoleRequest = {
      values: {
        requestType: 'talent-acquisition',
        acquisitionType: 'new-position',
      },
    };

    it('includes hr, finance, and ceo fields, but not it and facilities', () => {
      const wrapper = factory(addRoleRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(true);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(true);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });



  describe( 'When the request type is talent-acquisition and the acquisition type is fill-position', () => {
    const addRoleRequest = {
      values: {
        requestType: 'talent-acquisition',
        acquisitionType: 'fill-position',
      },
    };

    it('includes hr field, but not finance, ceo, it and facilities', () => {
      const wrapper = factory(addRoleRequest);
      expect(wrapper.exists()).toBe(true);

      // HR Hidden Input exists
      const findHRApproval = wrapper.find('[name="approvals[hr]"]');
      expect(findHRApproval.exists()).toBe(true);

      // Finance Hidden Input does not exist
      const findFinanceApproval = wrapper.find('[name="approvals[finance]"]');
      expect(findFinanceApproval.exists()).toBe(false);

      // CEO Hidden Input does not exist
      const findCEOApproval = wrapper.find('[name="approvals[ceo]"]');
      expect(findCEOApproval.exists()).toBe(false);

      // IT Hidden Input exists
      const findITApproval = wrapper.find('[name="approvals[it]"]');
      expect(findITApproval.exists()).toBe(false);

      // Facilities Hidden Input exists
      const findFacilitiesApproval = wrapper.find('[name="approvals[facilities]"]');
      expect(findFacilitiesApproval.exists()).toBe(false);
    });
  });
});