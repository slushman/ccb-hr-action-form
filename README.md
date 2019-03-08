# HR Action Form
React app that allows leaders within CCB to post an HR action form.



## Tech learned/practiced in this project:
* React
* Redux
* Firebase
* Material UI
* Formik
* Yup
* Jest & Enzyme
* day.js (replaces moment.js)
* Styled Components
* memoize
* axios (removed as not needed)
* React Context API (removed in favor of Redux)

## Tech to Add
* TypeScript
* Slack API


## TODO
* Send notification on form submission to Slack.
* Get response from Slack, save to Firebase DB.
* Send additional notifications to Slack based on previous Slack responses.


## Approvals

The approvals change based on the type form submitted.

Every form needs to approvals from HR and the Leadership Team.

### CEO Approval

The CEO needs to be approve:
* Talent Acquisition - New Position
* Add Role
* Transfer/Promotion

### Finance Approval

Finance needs to approve:
* All Employment types
* Talent Acquisition - New Position
* Add Role
* Leave Requests

### Notifications

IT and Facilities needs to be notified about some requests, but just require limited information, like the employee name and start date. 