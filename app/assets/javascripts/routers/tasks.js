Todo.Routers.Tasks = Backbone.Router.extend({
  routes: { 
    "": "index"
  },
  index: function() {
    var view = new Todo.Views.TasksIndex({ collection: Todo.tasks });
    $('body').html(view.render().$el);
  }
});

