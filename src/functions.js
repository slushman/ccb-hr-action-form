import React from 'react';
import * as R from 'ramda';

/**
 * Returns an array of the form objects, adding the formId with each form object.
 * 
 * @param {object} forms The forms object
 * @return {array} The forms in an array with the formId included in each one.
 */
export const convertToArrayWithFormId = ( forms ) => {
  return Object.entries( forms ).map( ( form ) => {
    return { ...form[1], formId: form[0] };
  } );
}

/**
 * Returns markup based on the response.
 * 
 * @param {obj} responseInfo The response object.
 * @return {mixed} Markup based on the response.
 */
export const getStatus = ( responseInfo ) => {
  if ( 'approved' === responseInfo.response ) {
    return <span aria-label="approved" role="img">✅</span>;
  } else if ( 'denied' === responseInfo.response ) {
    return <span aria-label="denied" role="img">❌</span>;
  }
  return <span aria-label="not yet" role="img">¯\_(ツ)_/¯</span>;
}

/**
 * Returns whether this form is waiting on your response.
 * 
 * @param {obj} form The form object.
 * @param {obj} currentUser The current user object.
 * @return {bool}   Whether this form is waiting for your response.
 *                    TRUE: is waiting for your response
 *                    FALSE: you've already responded.
 */
export const waitingOnMe = ( form, currentUser ) => {

  const responses = Object.values( form.responses ); // make an array of the responses.

  const isMyEmailPresent = ( response ) => currentUser.email === response.contact; // Is the currentUser email in the response?
  const responsesWithMyEmail = R.filter( isMyEmailPresent, responses ); // Return only the responses with the currentUser email

  if ( 1 > responsesWithMyEmail.length ) { // Return false if there are no responses with your email in them.
    return false;
  }

  const responseIsBlank = (response) => '' === response.response;
  const notResponded = R.filter( responseIsBlank, responsesWithMyEmail );

  if ( 0 < notResponded.length ) { // If there are any here, they are waiting on you.
    return true;
  }

  return false; // Otherwise, there's nothing waiting on you.
}