'use strict';

var Module = require('meanio').Module;
var Kilosixcore = new Module('kilosixcore');

Kilosixcore.register(function (app, auth, database, system) {
    // NOTE: DO NOT remove the 'system' argument above. It's here to force the system package to load before this module
    //       and allow us to override the default template.

    //We enable routing. By default the Package Object is passed to the routes
    Kilosixcore.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    //Kilosixcore.menus.add({
    //    title: 'kilosixcore example page',
    //    link: 'kilosixcore example page',
    //    roles: ['authenticated'],
    //    menu: 'main'
    //});

    Kilosixcore.aggregateAsset('css', 'kilosixcore.css');

    // This overrides the default templating from the system package.
    app.set('views', __dirname + '/server/views');

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
