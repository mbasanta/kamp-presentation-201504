// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets');
  hash = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('.bullet'),
  hash()
]);
