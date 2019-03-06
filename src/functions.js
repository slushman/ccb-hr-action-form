export const convertToArrayWithFormId = ( forms ) => {
  return Object.entries( forms ).map( ( form ) => {
    return { ...form[1], formId: form[0] };
  } );
}
