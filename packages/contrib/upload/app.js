'use strict';

var Module = require('meanio').Module,
    Upload = new Module('upload'),
    config = require('meanio').loadConfig(),
    express = require('express');

Upload.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Upload.routes(app, auth, database);

    Upload.aggregateAsset('js', '../lib/danialfarid-angular-file-upload/dist/angular-file-upload-shim.min.js', {
        absolute: false
    });
    Upload.aggregateAsset('js', '../lib/danialfarid-angular-file-upload/dist/angular-file-upload.min.js', {
        absolute: false
    });

    Upload.aggregateAsset('css', '../css/meanUpload.css', {
        absolute: false
    });

    Upload.angularDependencies(['angularFileUpload']);

    //We are adding a link to the main menu for all authenticated users
    //Upload.menus.add({
    //    title: 'Mean upload help page',
    //    link: 'Mean upload help page',
    //    roles: ['authenticated'],
    //    menu: 'main'
    //});

    if (Upload.events.defaultData)
        Upload.events.defaultData({
            type: 'file',
            subtype: 'image'
        });

    app.use('/files/public', express.static(config.root + '/files/public'));

    return Upload;
});
