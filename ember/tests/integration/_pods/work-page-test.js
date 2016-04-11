import Ember from 'ember';
import { module, test } from 'qunit';
import Pretender from 'pretender';
import startApp from '../../helpers/start-app';

let App, server;

module('Integration - Projects Page', {
  beforeEach: function () {
    App = startApp();

    const projects = [
      {
        id: 1,
        name: 'taz',
        description: 'EMR app to give patient more power over their information'
      },
      {
        id: 2,
        name: 'whats cooking?',
        description: 'recipe finder for busy devs with shopping list functionality'
      },
      {
        id: 3,
        name: 'karma',
        description: 'volunteer opportunity finder'
      }
    ];

    server = new Pretender(function() {
      this.get('/api/projects', function() {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({projects: projects})];
      });

      this.get('/api/projects/:id', function(request) {
        let project = projects.find(function(project) {
          if (project.id === parseInt(request.params.id, 10)) {
            return project;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({project: project})];
      });
    });
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

test('Should list all projects', function(assert) {
  visit('/work').then(function() {
    assert.equal(find('a:contains("taz")').length, 1);
    assert.equal(find('a:contains("whats cooking?")').length, 1);
    assert.equal(find('a:contains("karma")').length, 1);
  });
});

test('Should be able to navigate to a project page', function(assert) {
  visit('work').then(function() {
    click('a:contains("taz")').then(function() {
      assert.equal(find('.project-title').text().trim(), 'taz');
    });
  });
});

test('Should be able visit a project page', function(assert) {
  visit('/work/1').then(function() {
    assert.equal(find('.project-title').text().trim(), 'taz');
  });
});
