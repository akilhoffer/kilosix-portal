'use strict';

/* jshint -W098 */
angular.module('mean.kilosixcore').controller('KilosixcoreController', ['$scope', 'Global', 'Kilosixcore',
  function($scope, Global, Kilosixcore) {
    $scope.global = Global;
    $scope.package = {
      name: 'kilosixcore'
    };
  }
]);
