import React, { Component } from 'react';
import { withFirebase } from '../components/Firebase';

//import { forms } from '../constants/testForms';
import { YourFormsTable } from '../components/YourForms/YourFormsTable';

class YourFormsContainer extends Component {
  state = {
    error: false,
    forms: [],
    loading: false,
  };

  componentDidMount() {
    this.getForms();
  }

  getForms = async () => {
    let formsArray = [];

    //this.props.firebasedb.collection('forms').get()

    // use this.props.authUser.uid to fetch the current user's forms.

    const formsRef = await this.props.firebase.db.collection('forms');
    try {
      const allFormsSnapshot = await formsRef.get();
      allFormsSnapshot.forEach( form => {
        const formData = form.data();
        formData.formId = form.id;
        formsArray.push(formData);
      })
    } catch ( error ) {
      console.log('Error getting documents', error);
    }
    this.setState({
      forms: formsArray,
      loading: true,
    });
    try {
      this.setState({
        loading: false,
      });
    } catch ( error ) {
      this.setState({
        error: true,
        loading: true,
      });
    }
  }
  
  render() {
    if ( 1 > this.state.forms.length ) {
      return null;
    }
    console.log(this.state);
    return (
      <YourFormsTable
        forms={ this.state.forms }
      />
    );
  }
}

export default withFirebase( YourFormsContainer );
