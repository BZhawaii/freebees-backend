
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('establishment').del()
    .then(function () {
      const establishments = [{
        name: 'Brider',
        password: '1234',
        address: '1644 Platte St, Denver, CO 80202',
        imageURL: 'http://www.denverbrider.com/wp-content/uploads/sites/59/2016/02/BRK-7306.jpg',
        about: 'Brider is a fast-casual rotisserie concept that serves breakfast, lunch and dinner, and is lcoated on the first level of the new Nichols Building on Platte Street in downtown Denver.  The Nichols Building is a vibrant, four-story, mixed-use building home to many of Denvers top tech entrepeneurs, including Galvanize and Pivotal Labs.'
      }, {
        name: 'Denver Beer Co',
        password: '1234',
        address: '1695 Platte St, Denver, CO 80202',
        imageURL: 'http://brewbound-images.s3.amazonaws.com/wp-content/uploads/2012/10/dbc-1.jpg',
        about: 'We love the Denver lifestyle and wanted to create a brewery that matches our citys personality.  Denverites work hard, and play even harder.  And after a long slog at the office or a gnarly mountain bike ride there is nothing better than a friendly place to sit and relax with friends and a pint.  We welcome both oxford shirts and dirty shorts.  Dogs are welcome too.  Denver Beer Co is a community where patrons will likely meet a new ski buddy and swap scar stories with strangers.'
      }, {
        name: 'Masterpiece Delicatessen',
        password: '1234',
        address: '1575 Central St., Denver, CO 80211',
        imageURL: 'http://denver.thedrinknation.com/images/bars/masterpiecedelidenver.jpg',
        about: 'Masterpiece Delicatessen opened in 2016 as a neighborhood restaurant specializing in Colorado inspired dishes in a family friendly environment.  Masterpiece Kitchen offers award-winning chef Justin Brunsons unique take on brunch, lunch and dinner, all sourced with seasonal and local ingredients.  The menu is inspired by the best from Masterpiece Deli, Old Major and the Royal Rooster.'
      }]

      return knex('establishment').insert(establishments);
    });  //closes return knex
};  //closes exports.see
