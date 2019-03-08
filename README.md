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
* Approve/deny on ViewForm should re-render form and make the ActionBanner go away.
* Send notification on form submission to Slack.
* Get response from Slack, save to Firebase DB.
* Send additional notifications to Slack based on previous Slack responses.


## Responses

The responses change based on the type form submitted.

Every form needs to responses from HR and the Leadership Team.

### CEO Response

The CEO needs to respond to these requests:
* Talent Acquisition - New Position
* Add Role
* Transfer/Promotion

### Finance Response

Finance needs to respond to these requests:
* All Employment types
* Talent Acquisition - New Position
* Add Role
* Leave Requests

### Notifications

IT and Facilities needs to be notified about some requests, but just require limited information, like the employee name and start date.
