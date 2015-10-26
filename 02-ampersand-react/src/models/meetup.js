import Model from 'ampersand-model';
import Collection from 'ampersand-rest-collection';

import fetchJsopn from 'fetch-jsonp';

let seq_ids = 0;
const getNextId = () => ++seq_ids;

let Attendee = Model.extend({
  props: {
    id: ['number', false, getNextId],
    name: 'string',
    thumb_link: ['string', false, () => `https://randomuser.me/api/portraits/thumb/lego/${Math.floor(Math.random() * 10)}.jpg`]
  }
});

let Meetup = Collection.extend({
  model: Attendee,
  url: 'https://api.meetup.com/2/rsvps?offset=0&format=json&rsvp=yes&event_id=225879242&photo-host=public&page=200&fields=&order=event&desc=false&sig_id=94399712&sig=730c61d760cfcea806395943d5529382c1d54d7a&callback=callback',

  sync(method, collection, opts){
    return fetchJsopn(collection.url)
      .then(res => res.json())
      .then(jsonRes => opts.success(this.mapData(jsonRes)));
  },

  mapData(data){
    return data.results.map(person => {
      return {
        id: person.member.member_id,
        name: person.member.name,
        thumb_link: person.member_photo ? person.member_photo.thumb_link : undefined
      }
    })
  }
})

export default Meetup;