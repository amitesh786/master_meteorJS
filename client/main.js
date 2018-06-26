import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './main.html';

Resolutions = new Mongo.Collection('resolutions');

// Client Respond
if (Meteor.isClient) {
    Template.body.helpers({
        resolutions: function () {
            return Resolutions.find();
        }
    });
}
// Server startup
if (Meteor.isServer) {
    Meteor.startup(() => {
        // code to run on server at startup
    });
}
