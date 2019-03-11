import { PureApprovalFields } from '../ApprovalFields';
import { shallowFactory } from '../../../testUtils';
import * as R from 'ramda';

const factory = shallowFactory(PureApprovalFields, {});

const testLTEmail = 'asenneff@churchcommunitybuilder.com';
const testNonLTEmail = 'mteran@churchcommunitybuilder.com';

const testForEmail = option => option.value === testLTEmail;

describe('<PureApprovalFields/>', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);

    // Select exists
    const findLT = wrapper.find('Select');
    expect(findLT.exists()).toBe(true);
  });

  describe( 'When given an authUser that is an LT member', () => {
    const factoryProps = {
      authUser: {
        email: testLTEmail,
      },
    };
    it( 'should remove that member from the select options.', () => {
      const wrapper = factory(factoryProps);
      const findLT = wrapper.find('Select');
      const selectOptions = findLT.props().options;
      const findPassedEmail = R.any( testForEmail )( selectOptions );
      expect(findPassedEmail).toBe(false)
    } );
  } );
  describe( 'When given an authUser that is not an LT member', () => {
    const factoryProps = {
      authUser: {
        email: testNonLTEmail,
      },
    };
    it( 'test member should be in the select options.', () => {
      const wrapper = factory(factoryProps);
      const findLT = wrapper.find('Select');
      const selectOptions = findLT.props().options;
      const findPassedEmail = R.any( testForEmail )( selectOptions );
      expect(findPassedEmail).toBe(true)
    } );
  } );
});