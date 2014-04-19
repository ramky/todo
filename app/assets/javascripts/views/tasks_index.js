Todo.Views.TasksIndex = Backbone.View.extend({ 
  render: function () {
    var self = this;
    this.$el.html(JST['tasks/index']()); 
    // Note that no collection is needed to build the container markup.
    this.collection.each(function(task) {
      var taskView = new Todo.Views.TaskView({ model: task }); 
      self.$('table').append(taskView.render().el);
    });
    return this; 
  }
});
