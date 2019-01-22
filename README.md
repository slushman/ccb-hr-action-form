# TODO

Finish tests for Textarea.
Setup API for getting associates from The Village.
Setup API for sending form info to The Village DB.
Setup API for sending responses to The Village DB.
Setup Redux for auth.
Setup Redux for saving selected associate?





# Slack API Info
You must entity-encode these characters:
& becomes &amp;
< becomes &lt;
> becomes &gt;

URLs must be encoded as well. 



Buttons in message:
* Approve: timestamps the person's response on the request and triggers the next step(s).
* Deny: timestamps the person's response on the request and sends a notification back to the original requester.
* Ask Question: opens a message to the original requester in Slack.



Process:
LT member goes to The Village and fills out the AA Form.
Sonda receives a Slack notification on submission.

If she approves, The Village app receives a response and sets a timestamp with her name/account on the form.

Then either Joe & HR Manager receive a Slack notification.
or
The other leadership team membership receive Slack notifications.

When LT member(s) approve, then Don receives a Slack notification.

When Don approves, the originator is notified of a successful request.

If at any point someone denies a request, the timestamp is created and the originator is notified an all processesz stop.

Optionally, any person in the process has the option to ask a question. This creates a direct message to a person in the chain (which is selectable). The process is paused until they either approve or deny the request.


# API
## POST
A response endpoint for recording the responses from Slack. Adds the following the form's DB: response code (0 or 1), timestamp, and person's ID.

If the response = 1, the next action is triggered and the originator is notified.

If the response = 0, the originator is notified.

## GET

Send message to user on Slack.
  Params:
    userId
    authorName
    contentText





# Slack API Info

## Users

const user = GET https://slack.com/api/users.profile.get

For mapping to the messages:

author_icon = user.profile.image_original
author_name = user.profile.real_name
author_link = "https://ccbchurch.slack.com/team/" + user.profile.team

UEG3PHN5P