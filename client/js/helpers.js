
Template.listLatest.helpers({
  infolite: function() {
    return Infolite.find();
  },
  mongo: function() {
    return process.env.MONGO_URL;
  }
});

//Template.hello.events({
//  'click button': function () {
    // increment the counter when button is clicked
//    Session.set("counter", Session.get("counter") + 1);
//  }
//});
