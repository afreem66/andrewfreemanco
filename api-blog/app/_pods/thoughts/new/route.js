import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('thought');
  },
  actions: {
    create() {
      let model = this.get('currentModel');
      if(model.get('isError')){
        return false;
      } else{
        model.save().then(this.transitionTo('thoughts'));
        console.log("saved succcessfully");
      }
    }
  }
});
