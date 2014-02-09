TD.Views.TasksListView = Backbone.View.extend({
  render: function () {
    var that = this;

    var ul = $("<ul></ul>");
    _(that.collection).each(function (task) {
      ul.append(
        $("<li></li>").text(task.title))
      )
    });

    that.$el.html(ul);
    return that;
  }
});

window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, tasks) {
    var tasksListView = new TD.Views.TasksListViews({
      collection: tasks
    });

    $rootEl.html(tasksListView.render().$el);
  }
}