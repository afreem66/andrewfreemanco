import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  project: DS.belongsTo('project', { async: true }),
  thought: DS.belongsTo('thought', { async: true })
});
