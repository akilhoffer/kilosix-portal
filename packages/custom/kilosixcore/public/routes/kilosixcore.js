'use strict';

angular.module('mean.kilosixcore').config(['$meanStateProvider',
    function ($meanStateProvider) {
        $meanStateProvider.state('kilosixcore example page', {
            url: '/kilosixcore/example',
            templateUrl: 'kilosixcore/views/index.html'
        });

        $meanStateProvider
            .state('home', {
                url: '/',
                templateUrl: 'kilosixcore/views/index.html'
            });
    }
]);
