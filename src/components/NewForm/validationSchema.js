import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  comments: Yup.string(),
  dateBirth: Yup.date().default(function(){
    return new Date();
  }),
  dateClosed: Yup.date().default(function(){
    return new Date();
  }),
  dateEffective: Yup.date().default(function(){
    return new Date();
  }),
  dateFilled: Yup.date().default(function(){
    return new Date();
  }),
  dateHire: Yup.date().default(function(){
    return new Date();
  }),
  dateLeaveReturn: Yup.date().default(function(){
    return new Date();
  }),
  datePosted: Yup.date().default(function(){
    return new Date();
  }),
  dateRequested: Yup.date().default(function(){
    return new Date();
  }),
  formName: Yup.string(),
  hiringLead: Yup.string(),
  leavePtoHours: Yup.string(),
  nameAssociate: Yup.string(),
  nameNewRole: Yup.string(),
  newRate: Yup.string(),
  notRehirable: Yup.string(),
  numberOfDays: Yup.number(),
  otherExplanation: Yup.string(),
  role: Yup.string(),
  namePreviousRole: Yup.string(),
  salary: Yup.string(),
  salaryNew: Yup.string(),
  salaryPrevious: Yup.string(),
  submitterId: Yup.string(),
  team: Yup.string(),
  teamLead: Yup.string(),
  teamLeadNew: Yup.string(),
  teamLeadPrevious: Yup.string(),
});
