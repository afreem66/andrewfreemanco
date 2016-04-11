import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('projects', {path: '/work'}, function() {
    this.route('show', {path: '/:project_id'});
  });
  this.route('thoughts');
});

export default Router;
