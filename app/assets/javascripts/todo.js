var Todo = { 
  Models: { },
  Collections: { },
  Views: { },
  Routers, { },
  initialize: function() {
    this.tasks = new Todo.Collections.Tasks(data.tasks);
    new Todo.Routers.Tasks();
    Backbone.history.start();
  }
};
