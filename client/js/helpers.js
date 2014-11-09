
Template.listLatest.helpers({
  infolite: function() {
    return Infolite.find();
  },
  latest: function() {
    return Infolite.find({}, {sort: {status_at: -1}, limit: 1});

    //return Infolite.findOne({}, {sort: {status_at: -1}});
  }
});

//Template.hello.events({
//  'click button': function () {
    // increment the counter when button is clicked
//    Session.set("counter", Session.get("counter") + 1);
//  }
//});
//Template.chart.created = function() {
//  _.defer(function() {
//      latest = Infolite.find({}, {sort: {status_at: -1}, limit: 1});
//      nv.addGraph(function() {
//        var chart = nv.models.lineChart()
//          .x(function())
//      })
//    )
//  }
//}
