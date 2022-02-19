import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

Meteor.startup(() => {
  Meteor.publish("mycustompub", function publish() {
    this.added("links", Random.id, { field : "Test"});
    this.ready()
    this.onStop(() => {

    })
  });
});
