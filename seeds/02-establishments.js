
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('establishment').del()
    .then(function () {
      const establishments = [{
        name: 'Brider',
        password: '1234',
        email: 'this@that.com',
        address: '1644 Platte St, Denver, CO 80202',
        www: 'http://www.denverbrider.com/',
        imageURL: 'http://www.denverbrider.com/wp-content/uploads/sites/59/2016/02/BRK-7306.jpg',
        about: 'Brider is a fast-casual rotisserie concept that serves breakfast, lunch and dinner, and is lcoated on the first level of the new Nichols Building on Platte Street in downtown Denver.  The Nichols Building is a vibrant, four-story, mixed-use building home to many of Denvers top tech entrepeneurs, including Galvanize and Pivotal Labs.'
      }, {
        name: 'Denver Beer Co',
        password: '1234',
        email: 'this@that.com',
        address: '1695 Platte St, Denver, CO 80202',
        www: 'http://denverbeerco.com/',
        imageURL: 'http://brewbound-images.s3.amazonaws.com/wp-content/uploads/2012/10/dbc-1.jpg',
        about: 'We love the Denver lifestyle and wanted to create a brewery that matches our citys personality.  Denverites work hard, and play even harder.  And after a long slog at the office or a gnarly mountain bike ride there is nothing better than a friendly place to sit and relax with friends and a pint.  We welcome both oxford shirts and dirty shorts.  Dogs are welcome too.  Denver Beer Co is a community where patrons will likely meet a new ski buddy and swap scar stories with strangers.'
      }, {
        name: 'Avanti Food and Beverage',
        password: '1234',
        email: 'this@that.com',
        address: '3200 N Pecos St, Denver, CO 80211',
        www: 'http://avantifandb.com/',
        imageURL: 'http://www.milehighhappyhour.com/wp-content/uploads/2015/08/Avanti-Denver3-1024x768.jpg',
        about: 'Bi-level shipping container with a variety of vendors (pizza, noodles & more), plus a rooftop bar.'
      }, {
        name: 'Recess Beer Garden',
        password: '1234',
        email: 'this@that.com',
        address: '2715 17th St #103, Denver, CO 80211',
        www: 'http://www.recessbeergarden.com/',
        imageURL: 'http://vp.cdn.cityvoterinc.com/GetImage.ashx?img=00/00/08/36/39/69/8363969-2858518.jpg',
        about: 'Craft beer & American grub served in casual digs with a large patio featuring picnic tables & games.'
      }, {
        name: 'Willians & Graham',
        password: '1234',
        email: 'this@that.com',
        address: '3160 Tejon St, Denver, CO 80211',
        www: 'http://williamsandgraham.com/',
        imageURL: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/2342482/50_Williams_and_Graham_internal.0.jpg',
        about: 'Prohibition-era speakeasy in a corner bookstore with handcrafted cocktails, small plates & desserts.'
      }, {
        name: 'LoHi Steak Bar',
        password: '1234',
        email: 'this@that.com',
        address: '3200 Tejon St, Denver, CO 80211',
        www: 'http://www.lohisteakbar.com/',
        imageURL: 'https://cdn0.vox-cdn.com/thumbor/NdbjPHoL8brJ_ePCMoM2Q9DuOjA=/902x590/cdn0.vox-cdn.com/uploads/chorus_asset/file/2345050/LoHiSteak_8909.0.jpg',
        about: 'Sleek, happening hangout serving prime cuts of meat & steakhouse standards with custom cocktails.'
      },  {
        name: 'Bar Dough',
        password: '1234',
        email: 'this@that.com',
        address: '2227 W 32nd Ave, Denver, CO 80211',
        www: 'http://bardoughdenver.com/',
        imageURL: 'https://mazdaoflakewood.files.wordpress.com/2017/01/bar-dough-fl19.jpg?w=585',
        about: 'Modern-rustic Italian spot featuring gourmet wood-fired pizzas, plus pastas, wine, beer & cocktails.'
      }, {
        name: 'Linger',
        password: '1234',
        email: 'this@that.com',
        address: '2030 W 30th Ave, Denver, CO 80211',
        www: 'http://lingerdenver.com/',
        imageURL: 'http://diningout.com/denverboulder/wp-content/uploads/sites/13/2014/10/linger-roof-.jpg',
        about: 'This old mortuary is now a lively restaurant with a rooftop lounge & global small plates.'
      }, {
        name: 'Little Man Ice Cream',
        password: '1234',
        email: 'this@that.com',
        address: '2620 16th St, Denver, CO 80211',
        www: 'http://www.littlemanicecream.com/',
        imageURL: 'https://cdn.csgazette.biz/cache/r960-427d94ffbba204e0148ff468e769f77c.jpg',
        about: 'Milk-jug shaped shop scooping unique flavors of homemade ice cream & open until midnight.'
      },{
        name: 'Masterpiece Delicatessen',
        password: '1234',
        email: 'this@that.com',
        address: '1575 Central St., Denver, CO 80211',
        www: 'bzhawaii@yahoo.com',
        imageURL: 'http://denver.thedrinknation.com/images/bars/masterpiecedelidenver.jpg',
        about: 'Masterpiece Delicatessen opened in 2016 as a neighborhood restaurant specializing in Colorado inspired dishes in a family friendly environment.  Masterpiece Kitchen offers award-winning chef Justin Brunsons unique take on brunch, lunch and dinner, all sourced with seasonal and local ingredients.  The menu is inspired by the best from Masterpiece Deli, Old Major and the Royal Rooster.'
      }]

      return knex('establishment').insert(establishments);
    });  //closes return knex
};  //closes exports.see
