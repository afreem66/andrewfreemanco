import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('thoughts');
  this.route('projects', {path: '/work'});
  this.route('tag');
  this.route('about');
});

export default Router;
