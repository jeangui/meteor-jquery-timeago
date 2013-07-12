Package.describe({
  summary: "Timeago is a jQuery plugin that makes it easy to support automatically updating fuzzy timestamps."
});

Package.on_use(function(api) {
  api.add_files(['timeago/jquery.timeago.js'], 'client');
});
