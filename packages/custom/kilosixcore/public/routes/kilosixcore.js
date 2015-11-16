'use strict';

angular.module('mean.kilosixcore').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('kilosixcore example page', {
      url: '/kilosixcore/example',
      templateUrl: 'kilosixcore/views/index.html'
    });
  }
]);
