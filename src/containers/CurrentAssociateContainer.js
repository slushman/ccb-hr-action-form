import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Select } from '../components/Fields/Select';

/**
 * Associate selector appears if:
 * requestType is employment
 * and
 * employmentType is rehire or resignation or termination
 * 
 * This container grabs a list of current associates from 'TODO:API name'.
 */
export class CurrentAssociateContainer extends Component {

  state = {
    error: false,
    loading: false,
    currentAssociates: [],
  };

  componentDidMount() {
    this.getAssociates();
  }

  getAssociates = async () => {
    const json = [
      {
        value: 'lukeskywalker',
        label: 'Luke Skywalker',
        teamName: 'Devops',
      },
      {
        value: 'leiaorgana',
        label: 'Leia Organa',
        teamName: 'Software Development',
      },
    ];
    this.setState({
      loading: true,
    });
    try {
      // const json = await axios.post('http://dev.local/api/search/results', {
      //   body: JSON.stringify({
      //     domain: 'individuals',
      //     filters: {
      //       id: 'membership_type',
      //       invert: false,
      //       operator: 'in',
      //       type: 'constraint',
      //       value: [
      //         this.props.membershipId,
      //       ]
      //     },
      //     settings: {
      //       return_search_results: true,
      //     }
      //   })
      // });
      // console.log(json);
      this.setState({
        loading: false,
        currentAssociates: json,
      });
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }
  
  render() {
    console.log(this.state);
    if ( 1 > this.state.currentAssociates.length ) {
      return null;
    }
    return (
      <Select
        label="Choose Associate"
        name={this.props.name}
        options={this.state.currentAssociates}
        placeholder="Choose an associate"
      />
    );
  }
}

CurrentAssociateContainer.propTypes = {
  membershipId: PropTypes.number,
  name: PropTypes.string.isRequired,
};
