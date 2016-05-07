import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('thought');
  },
  actions: {
    create() {
      this.get('model').save().then(console.log("andrew"));
    }
  }
});
