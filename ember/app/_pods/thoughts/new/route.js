import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('thought');
  },

  actions: {
    create () {
      this.get('currentModel').save().then(() => {
       this.transitionTo('thoughts');
      }).catch((res) => {
        console.log(res);
      });
    }
  }

});
