import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Home Page', {
  beforeEach: function () {
    App = startApp();
  },
  afterEach: function () {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome a user to my website', function (assert) {
  visit('/').then(function () {
    assert.equal(find('h1#welcome').text().trim(), 'Welcome friend', 'Home page renders successfully');
  });
});

test('Should be able to navigate back to the homepage from about', function (assert) {
  visit('/about').then(function () {
    click('a:contains("Home")').then(function () {
      assert.equal(find('h1#welcome').text().trim(), 'Welcome friend', 'Can navigate back to homepage from about');
    });
  });
});

test('Should be able to navigate back to the homepage from work', function (assert) {
  visit('/work').then(function () {
    click('a:contains("Home")').then(function () {
      assert.equal(find('h1#welcome').text().trim(), 'Welcome friend', 'Can navigate back to homepage from about');
    });
  });
});

test('Should be able to navigate back to the homepage from thoughts', function (assert) {
  visit('/thoughts').then(function () {
    click('a:contains("Home")').then(function () {
      assert.equal(find('h1#welcome').text().trim(), 'Welcome friend', 'Can navigate back to homepage from thoughts');
    });
  });
});

