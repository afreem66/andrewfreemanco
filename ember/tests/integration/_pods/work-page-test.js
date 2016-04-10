import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var App;

module('Integration - Work Page', {
  beforeEach: function () {
    App = startApp();
  },
  afterEach: function () {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the work page', function (assert) {
  visit('/').then(function () {
    click("a:contains('Work')").then(function() {
      assert.equal(find('h3').text().trim(), 'What I am working on', 'Can navigate to the work page');
    });
  });
});

