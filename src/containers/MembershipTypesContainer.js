import React, { Component } from 'react';
import axios from 'axios';

import { CurrentAssociateContainer } from './CurrentAssociateContainer';

export class MembershipTypesContainer extends Component {

  state = {
    error: false,
    loading: false,
    membershipTypes: [],
  };

  componentDidMount() {
    this.getMembershipTypes();
  }

  getMembershipTypes = async () => {
    try {
      this.setState({
        loading: true,
      });
      const json = await axios.get('https://village.ccbchurch.com/api/church/membership_types');
      this.setState({
        loading: false,
        membershipTypes: json.data,
      });
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }
  
  render() {
    if( 1 > this.state.membershipTypes.length ) {
      return null;
    }
    const associateMembershipId = this.state.membershipTypes.filter( function(membershipType) {
      return 'Associate' === membershipType.name;
    });
    return (
      <CurrentAssociateContainer
        membershipId={associateMembershipId[0].id}
        name="nameAssociate"
      />
    );
  }
}
