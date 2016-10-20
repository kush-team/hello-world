import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          post: this.store.find('post', {filter: {name: params.post_slug} }).then(function (posts) { return posts.objectAt(0) }),
      });		
	}
});