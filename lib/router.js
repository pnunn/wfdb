Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
      return Meteor.subscribe('recentMW');
    }
});

Router.map(function() {
  this.route('listLatest', {path: '/'});  
});

//Router.onBeforeAction('loading');
