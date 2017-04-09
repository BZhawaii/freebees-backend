
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('freebee').del()
    .then(function () {
      const freebeeobj = [{
        name: 'Beer',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 1
      }, {
        name: 'Hamburger',
        type: 'Free',
        category: 'Food',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 2
      }, {
        name: 'Wine',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 3
      }, {
        name: 'Ice Cream',
        type: 'Free',
        category: 'Food',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 9
      }, {
        name: 'Princess Yum Yum Pint',
        type: 'BOGO',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 4
      }, {
        name: 'Pint',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 5
      }, {
        name: 'Taster Tray',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 6
      }, {
        name: 'Beer',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 8
      }, {
        name: 'Shot of Tequila',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 7
      }, {
        name: 'Pizza',
        type: 'BOGO',
        category: 'Food',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 10
      }, {
        name: 'Tshirt',
        type: 'Free',
        category: 'Stuff',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 1
      }, {
        name: 'Hat',
        type: 'Free',
        category: 'Hat',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 2
      }, {
        name: 'Beer',
        type: 'BOGO',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 3
      }, {
        name: 'Cheese Fries',
        type: 'Free With Purchase',
        category: 'Food',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 4
      }, {
        name: 'Wine',
        type: 'BOGO',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 5
      }, {
        name: 'Beer',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 6
      }, {
        name: 'Beer',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 7
      }, {
        name: 'Draft',
        type: 'BOGO',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 8
      }, {
        name: 'Band: Plain White Tees',
        type: 'Free',
        category: 'Entertainment',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 2
      }, {
        name: 'Scoop',
        type: 'Free',
        category: 'Food',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 9
      }, {
        name: 'Comedian: Chris Rock',
        type: 'BOGO',
        category: 'Admission',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 6
      }, {
        name: 'Beer',
        type: 'Free',
        category: 'Drinks',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 1
      }, {
        name: 'Taco',
        type: 'Free',
        category: 'Food',
        date: 'Sat Apr 08 2017',
        startTime: '14:00:00',
        stopTime: '16:00:00',
        establishment_id: 7
      }]

      return knex('freebee').insert(freebeeobj);
    });  //closes return knex
};  //closes exports.see
