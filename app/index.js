'use strict';

// require webpack assets
require('./main.scss')

// npm modules
const angular = require('angular');
const ngParallax = require('ng-parallax')

// angular module
const app = angular.module('myApp', [ngParallax]);

// angular constructus
app.controller('CloudController', ['$log', '$scope', CloudController]);

function CloudController($log, $scope) {
  $log.debug('init CloudController')
  let cloudCtrl = $scope.cloudCtrl = {}
  cloudCtrl.pattern = '../app/assets/Sky_back_layer.png'
}
