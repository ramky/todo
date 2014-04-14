Todo.Routers.Tasks = Backbone.Router.extend({
  routes: { 
    "": "index"
  },
  index: function() {
    alert('Hello, world! This is a Backbone router action.');
  }
});
