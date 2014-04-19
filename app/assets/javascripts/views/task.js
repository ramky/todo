Todo.Views.TaskView = Backbone.View.extend({ 
  render: function () {
    this.$el.html(JST['tasks/view']({ model: this.model }));
    return this;
  }
});
