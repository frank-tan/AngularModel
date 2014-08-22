angular
  .module('app', ['ng', 'ngRoute', 'ngResource'])
  .config(['$routeProvider', '$httpProvider', function(Router, $http) {
    Router
      .when('/', {
        controller: 'MainCtrl'
      });
    
    //Enable cross domain calls
    $http.defaults.useXDomain = true;
    
    //Remove the header used to identify ajax call that would prevent CORS from working
    delete $http.defaults.headers.common['X-Requested-With'];
  }]);
