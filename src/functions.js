import React from 'react';

export const convertToArrayWithFormId = ( forms ) => {
  return Object.entries( forms ).map( ( form ) => {
    return { ...form[1], formId: form[0] };
  } );
}

export const getStatus = ( responseInfo ) => {
  if ( 'approved' === responseInfo.response ) {
    return <span aria-label="approved" role="img">✅</span>;
  } else if ( 'denied' === responseInfo.response ) {
    return <span aria-label="denied" role="img">❌</span>;
  }
  return <span aria-label="not yet" role="img">¯\_(ツ)_/¯</span>;
}