'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Kilosixcore = new Module('kilosixcore');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Kilosixcore.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Kilosixcore.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Kilosixcore.menus.add({
    title: 'kilosixcore example page',
    link: 'kilosixcore example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Kilosixcore.aggregateAsset('css', 'kilosixcore.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Kilosixcore.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Kilosixcore.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Kilosixcore.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Kilosixcore;
});
