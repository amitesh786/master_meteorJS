import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './main.html';

Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
    Template.body.helpers({
        resolutions: function () {
            return Resolutions.find();
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(() => {
        // code to run on server at startup
    });
}
