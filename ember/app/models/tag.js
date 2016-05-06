import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  projects: DS.belongsTo('project', { async: true }),
  thoughts: DS.belongsTo('thought', { async: true })
});
