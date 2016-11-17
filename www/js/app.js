/*
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

class ToDoController {
  constructor($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('views/menu.html', (modal) => {
      this.modal = modal;
    }, {
      scope: $scope
    });

    this.section = [
      {title: 'purchase electricity', icon: 'ios-basketball'},
      {title: 'pay account', icon: 'android-playstore'},
      {title: 'sing debit order', icon: 'ios-pulse'},
      {title: 'property reporting', icon: 'ios-pulse'},
      {title: 'prepaid usage reports', icon: 'pie-graph'},
      {title: 'apply to rent', icon: 'bonfire'},
      {title: 'call blueberry', icon: 'briefcase'},
      {title: '', icon: ''},
      {title: '', icon: ''}
    ];

    this.menu = [
      'home',
      'purchase electricity',
      'pay account',
      'sing debit order',
      'property reporting',
      'prepaid usage reports',
      'apply to rent',
      'call blueberry',
      'about blueberry',
      'settings',
      'logout'
    ]
  }

}

ToDoController.$inject = ['$scope', '$ionicModal'];


angular.module('BlueBerry', ['ionic'])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: './views/home.html'
      })
      .state('section', {
        url: '/section',
        templateUrl: './views/section.html'
      })
  }])
  .run(($ionicPlatform) => {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller('ToDoCtrl', ToDoController);

*/

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var ToDoController = function ToDoController($scope, $ionicModal) {
  var _this = this;

  _classCallCheck(this, ToDoController);

  $ionicModal.fromTemplateUrl('views/menu.html', function (modal) {
    _this.modal = modal;
  }, {
    scope: $scope
  });

  this.section = [{ title: 'purchase electricity', icon: 'ios-basketball' }, { title: 'pay account', icon: 'android-playstore' }, { title: 'sing debit order', icon: 'ios-pulse' }, { title: 'property reporting', icon: 'ios-pulse' }, { title: 'prepaid usage reports', icon: 'pie-graph' }, { title: 'apply to rent', icon: 'bonfire' }, { title: 'call blueberry', icon: 'briefcase' }, { title: '', icon: '' }, { title: '', icon: '' }];

  this.menu = ['home', 'purchase electricity', 'pay account', 'sing debit order', 'property reporting', 'prepaid usage reports', 'apply to rent', 'call blueberry', 'about blueberry', 'settings', 'logout'];
};

ToDoController.$inject = ['$scope', '$ionicModal'];

angular.module('BlueBerry', ['ionic']).config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('index', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('section', {
    url: '/section',
    templateUrl: './views/section.html'
  });
}]).run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('ToDoCtrl', ToDoController);
