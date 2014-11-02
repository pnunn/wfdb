//Meteor.publish('infolite', function() {
//  return Infolite.find();
//})

Meteor.publish('recentMW', function() {
  return Infolite.find({}, {sort: {status_at: -1}, limit: 10});
  //return Infolite.find().sort({status_at: -1}).limit(10);
})
