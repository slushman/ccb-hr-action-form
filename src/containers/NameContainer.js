import React, { Component } from 'react';
import { Select } from '../components/Fields/Select';

export class NameContainer extends Component {

  state = {
    error: false,
    loading: false,
    nameOptions: [],
  };

  componentDidMount() {
    this.getNames();
  }

  getNames = async () => {
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
      // const response = await fetch('');
      // const json = await response.json();
      this.setState({
        loading: false,
        nameOptions: json,
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
    if ( 1 > this.state.nameOptions.length ) {
      return null;
    }
    return (
      <Select
        placeholder="Choose an associate"
        name={this.props.name}
        options={this.state.nameOptions}
      />
    );
  }
}
