import NewForm from '../NewForm';
import { shallowFactory } from '../../../testUtils';

const factory = shallowFactory(NewForm, {
  values: {
    requestType: '',
  },
});

describe('<NewForm/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // StyledForm exists
    const findStyledForm = wrapper.find('StyledForm');
    expect(findStyledForm.exists()).toBe(true);

    // Heading1 exists
    const findHeading1 = findStyledForm.find('Heading1');
    expect(findHeading1.exists()).toBe(true);

    // submitterId exists
    const findSubmitterId = findStyledForm.find('[name="submitterId"]');
    expect(findSubmitterId.exists()).toBe(true);

    // FormName exists
    const findFormName = findStyledForm.find('FormName');
    expect(findFormName.exists()).toBe(true);

    // RequestType exists
    const findRequestType = findStyledForm.find('RequestType');
    expect(findRequestType.exists()).toBe(true);

    // Submit Button exists
    const findSubmit = findStyledForm.find('[type="submit"]');
    expect(findSubmit.exists()).toBe(true);


    // EmploymentType does not exist
    const findEmploymentType = findStyledForm.find('EmploymentType');
    expect(findEmploymentType.exists()).toBe(false);

    // NewHireFields does not exist
    const findNewHireFields = findStyledForm.find('NewHireFields');
    expect(findNewHireFields.exists()).toBe(false);

    // AssociateName does not exist
    const findAssociateName = findStyledForm.find('AssociateName');
    expect(findAssociateName.exists()).toBe(false);

    // ResignationTerminationFields does not exist
    const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
    expect(findResignationTerminationFields.exists()).toBe(false);

    // AcquisitionType does not exist
    const findAcquisitionType = findStyledForm.find('AcquisitionType');
    expect(findAcquisitionType.exists()).toBe(false);

    // NewPositionFields does not exist
    const findNewPositionFields = findStyledForm.find('NewPositionFields');
    expect(findNewPositionFields.exists()).toBe(false);

    // AddRoleFields does not exist
    const findAddRoleFields = findStyledForm.find('AddRoleFields');
    expect(findAddRoleFields.exists()).toBe(false);

    // RoleChangeFields does not exist
    const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
    expect(findRoleChangeFields.exists()).toBe(false);

    // TransferPromotionFields does not exist
    const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
    expect(findTransferPromotionFields.exists()).toBe(false);
    
    // LeaveFields does not exist
    const findLeaveFields = findStyledForm.find('LeaveFields');
    expect(findLeaveFields.exists()).toBe(false);

    // EffectiveDate does not exist
    const findEffectiveDate = findStyledForm.find('EffectiveDate');
    expect(findEffectiveDate.exists()).toBe(false);

    // Comments does not exist
    const findComments = findStyledForm.find('Comments');
    expect(findComments.exists()).toBe(false);

    // ApprovalFields does not exist
    const findApprovalFields = findStyledForm.find('ApprovalFields');
    expect(findApprovalFields.exists()).toBe(false);
  });

  describe('When requestType is employment', () => {
    const factoryProps = {
      values: {
        requestType: 'employment',
      },
    };
    it('shows EmploymentType, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
  
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(true);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is employment and employmentType is new-hire', () => {
    const factoryProps = {
      values: {
        requestType: 'employment',
        employmentType: 'new-hire',
      },
    };
    it('shows EmploymentType, NewHireFields, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
  
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(true);
  
      // NewHireFields exists
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(true);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is employment and employmentType is rehire', () => {
    const factoryProps = {
      values: {
        requestType: 'employment',
        employmentType: 'rehire',
      },
    };
    it('shows EmploymentType, AssociateName, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
  
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(true);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName exists
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(true);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is employment and employmentType is resignation', () => {
    const factoryProps = {
      values: {
        requestType: 'employment',
        employmentType: 'resignation',
      },
    };
    it('shows EmploymentType, AssociateName, ResignationTerminationFields, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
  
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(true);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName exists
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(true);
  
      // ResignationTerminationFields exists
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(true);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is employment and employmentType is termination', () => {
    const factoryProps = {
      values: {
        requestType: 'employment',
        employmentType: 'termination',
      },
    };
    it('shows EmploymentType, AssociateName, ResignationTerminationFields, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(true);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName exists
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(true);
  
      // ResignationTerminationFields exists
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(true);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is talent-acquisition', () => {
    const factoryProps = {
      values: {
        requestType: 'talent-acquisition',
      },
    };
    it('shows EmploymentType, AcquisitionType, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType exists
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(true);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate does not exist
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(false);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is talent-acquisition and acquisitionType is new-position', () => {
    const factoryProps = {
      values: {
        requestType: 'talent-acquisition',
        acquisitionType: 'new-position',
      },
    };
    it('shows EmploymentType, AcquisitionType, NewPositionFields, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType exists
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(true);
  
      // NewPositionFields exists
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(true);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate does not exist
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(false);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is talent-acquisition and acquisitionType is fill-position', () => {
    const factoryProps = {
      values: {
        requestType: 'talent-acquisition',
        acquisitionType: 'fill-position',
      },
    };
    it('shows EmploymentType, AcquisitionType, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType exists
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(true);
  
      // NewPositionFields exists
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is add-role', () => {
    const factoryProps = {
      values: {
        requestType: 'add-role',
      },
    };
    it('shows EmploymentType, AddRoleFields, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields exists
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(true);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate does not exist
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(false);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is role-change', () => {
    const factoryProps = {
      values: {
        requestType: 'role-change',
      },
    };
    it('shows EmploymentType, RoleChangeFields, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields exists
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(true);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is transfer-promotion', () => {
    const factoryProps = {
      values: {
        requestType: 'transfer-promotion',
      },
    };
    it('shows EmploymentType, TransferPromotionFields, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName does not exist
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(false);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields exists
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(true);
      
      // LeaveFields does not exist
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(false);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });

  describe('When requestType is leave', () => {
    const factoryProps = {
      values: {
        requestType: 'leave',
      },
    };
    it('shows EmploymentType, AssociateName, LeaveFields, EffectiveDate, Comments, and ApprovalFields components.', () => {
      const wrapper = factory(factoryProps);
      expect(wrapper.exists()).toBe(true);
  
      // StyledForm exists
      const findStyledForm = wrapper.find('StyledForm');
      expect(findStyledForm.exists()).toBe(true);
    
      // EmploymentType exists
      const findEmploymentType = findStyledForm.find('EmploymentType');
      expect(findEmploymentType.exists()).toBe(false);
  
      // NewHireFields does not exist
      const findNewHireFields = findStyledForm.find('NewHireFields');
      expect(findNewHireFields.exists()).toBe(false);
  
      // AssociateName exists
      const findAssociateName = findStyledForm.find('AssociateName');
      expect(findAssociateName.exists()).toBe(true);
  
      // ResignationTerminationFields does not exist
      const findResignationTerminationFields = findStyledForm.find('ResignationTerminationFields');
      expect(findResignationTerminationFields.exists()).toBe(false);
  
      // AcquisitionType does not exist
      const findAcquisitionType = findStyledForm.find('AcquisitionType');
      expect(findAcquisitionType.exists()).toBe(false);
  
      // NewPositionFields does not exist
      const findNewPositionFields = findStyledForm.find('NewPositionFields');
      expect(findNewPositionFields.exists()).toBe(false);
  
      // AddRoleFields does not exist
      const findAddRoleFields = findStyledForm.find('AddRoleFields');
      expect(findAddRoleFields.exists()).toBe(false);
  
      // RoleChangeFields does not exist
      const findRoleChangeFields = findStyledForm.find('RoleChangeFields');
      expect(findRoleChangeFields.exists()).toBe(false);
  
      // TransferPromotionFields does not exist
      const findTransferPromotionFields = findStyledForm.find('TransferPromotionFields');
      expect(findTransferPromotionFields.exists()).toBe(false);
      
      // LeaveFields exists
      const findLeaveFields = findStyledForm.find('LeaveFields');
      expect(findLeaveFields.exists()).toBe(true);
  
      // EffectiveDate exists
      const findEffectiveDate = findStyledForm.find('EffectiveDate');
      expect(findEffectiveDate.exists()).toBe(true);
  
      // Comments exists
      const findComments = findStyledForm.find('Comments');
      expect(findComments.exists()).toBe(true);
  
      // ApprovalFields exists
      const findApprovalFields = findStyledForm.find('ApprovalFields');
      expect(findApprovalFields.exists()).toBe(true);
    });
  });
});