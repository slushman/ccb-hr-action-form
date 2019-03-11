# Questions:
If LT member submit form, does it need approval by another LT member?




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
* Setup chain logic for notifications
* Add more options for responses based on the various forms
* Change alerts to notification banner.
* Send notification on form submission to Slack.
* Get response from Slack, save to Firebase DB.
* Send additional notifications to Slack based on previous Slack responses.



## Chain Logic
1) If HR has not approved, hide from everyone else
2) If HR has approved, FIN is required response but has not responded, hide from everyone else
3) If HR & FIN have approved, LT is a required response but has not responded, hide from everyone else
4) If HR, FIN, and/or LT have approved, show to CEO


## Notifications
General rules:
If any responder denies, send the submitter a notification

Process (assuming all responders are needed):
When a new form is submitted, notify HR
When HR approves, send FIN a notification
When FIN approves, if the submitter is not LT, send the selected LT member a notification
If submitter is LT & FIN approves, or LT approves, and CEO needs to respond, send CEO notification.
If CEO approves, send submitter notification.





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
