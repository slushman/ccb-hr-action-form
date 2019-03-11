import functions from 'firebase-functions';
import IncomingWebhook from '@slack/client';

const webhook = new IncomingWebhook();

function sendMessage( message ) {
	webhook.send( message, function ( error, header, statusCode, body ) {
		if( error ) {
			console.log( 'Error: ', error );
		} else {
			console.log( 'Received', statusCode, 'from Slack');
		}
	});
}

exports.createForm = functions.firestore.document('forms/{formId}').onCreate( event => {
	const newValue = event.data.data();
	const message = "New Form Added : " + newValue.formTitle;
	sendMessage( message );
	return true;
});

exports.updateForm = functions.firestore.document('forms/{formId}').onUpdate(event => {
	const newValue = event.data.data();
	let message = '';

	// check if a new approval was added to the list
	// If so, create new message for next person
	// If not do nothing.

	sendMessage( message );
	console.log( 'Approval added : ' + JSON.stringify( newValue ) );
	return true;
});