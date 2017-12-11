var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {

  $stateProvider.state('app', {
    url: '',
    views: {

      "viewA": {
        templateUrl: 'views/view1.html',
        controller: 'mainCtrl1'
      },
      "viewB": {
        templateUrl: 'views/view2.html',
        controller: 'mainCtrl2'
      },
      "viewC": {
        templateUrl: 'views/view3.html',
        controller: 'mainCtrl3'
      }
    }
  })

})

app.controller('mainCtrl1', function($scope,$http) {
$http.get('http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=' + 80002).success(function(response) {
    $scope.weather = response;
  })
  // $scope.toddlers = [{
  //     "name": "Toddler One",
  //     "birthday": "1/1/2011",
  //     "happy": true
  //   },
  //   {
  //     "name": "Toddler Two",
  //     "birthday": "2/2/2011",
  //     "happy": true
  //   },
  //   {
  //     "name": "Toddler Three",
  //     "birthday": "3/3/2011",
  //     "happy": false
  //   }
  // ];
});

app.controller('mainCtrl2', function($scope,$http) {
$http.get('http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=' + 80002).success(function(response) {
    $scope.weather = response;
  })
  // $scope.infants = [{
  //     "name": "Infant One",
  //     "birthday": "1/1/2011",
  //     "happy": true
  //   },
  //   {
  //     "name": "Infant Two",
  //     "birthday": "2/2/2011",
  //     "happy": true
  //   },
  //   {
  //     "name": "Infant Three",
  //     "birthday": "3/3/2011",
  //     "happy": false
  //   }
  // ];
});

app.controller('mainCtrl3', function($scope, $http) {
  $http.get('http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=' + 80002).success(function(response) {
    $scope.weather = response;
  })
});

app.directive('loading', ['$http', function($http) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.isLoading = function() {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function(value) {
        if (value) {
          element.removeClass('ng-hide');
        } else {
          element.addClass('ng-hide');
        }
      });
    }
  };
}]);