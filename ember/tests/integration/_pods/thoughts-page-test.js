import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var App;

module('Integration - Thoughts page', {
  beforeEach: function () {
    App = startApp();
  },
  afterEach: function () {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the thoughts page', function (assert) {
  visit('/').then(function () {
    click('a:contains("Thoughts")').then(function () {
      assert.equal(find('h3').text().trim(), 'What I am thinking about these days', 'It navigates successfully to the thoughts page');
    });
  });
});

