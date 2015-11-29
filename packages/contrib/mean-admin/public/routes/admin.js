'use strict';
angular.module('mean.mean-admin').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('admin-users', {
                url: '/admin/users',
                templateUrl: 'mean-admin/views/users.html'
            }).state('admin-themes', {
                url: '/admin/themes',
                templateUrl: 'mean-admin/views/themes.html'
            }).state('admin-settings', {
                url: '/admin/settings',
                templateUrl: 'mean-admin/views/settings.html'
            }).state('admin-modules', {
                url: '/admin/modules',
                templateUrl: 'mean-admin/views/modules.html'
            });
    }
]).config(['ngClipProvider',
    function(ngClipProvider) {
        ngClipProvider.setPath('../mean-admin/assets/lib/zeroclipboard/dist/ZeroClipboard.swf');
    }
]);
