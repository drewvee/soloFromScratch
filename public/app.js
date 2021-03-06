angular.module('scratch', [])


.controller('mainCtrl', function($scope, Restos) {
  $scope.title = "Restaurants to visit";
  $scope.data = {};
  
  $scope.getRestos = function () {
    Restos.getAll()
      .then(function (resto) {
        console.log(resto);
        $scope.data.restos = resto;
      })
      .catch(function (err) {
        console.error(err);
      });
  };
  
  $scope.getRestos();
  
  $scope.addResto = function(){
    Restos.addOne($scope.resto)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.error(error);
      });
  };   
})

.controller('restoCtrl', function($scope, Restos) {
  
  
  $scope.restos = [
   {
    name: 'Terroni\'s - Toronto',
    rating: 9,
    review: 'Italian pizza & the rest'
   },
   {
    name: 'Franklin BBQ - Austin',
    rating: 7,
    review: 'So good I had the meat sweats'
   },
   {
    name: 'Horns - New Orleans',
    rating: 8,
    review: 'NOLA brunch done right'
   },
   {
    name: 'Yardbird - Hong Kong',
    rating: 9,
    review: 'Yakitori all day every day'
   }
  ]
})

.factory('Restos', function($http) {
    
    var getAll = function() {
      return $http ({
        method: 'GET',
        url: '/api/restos'
      })
      .then(function(resp) {
          return resp.data;
        });
    };   
     
    var addOne = function(resto) {
      return $http({
        method: 'POST',
        url: '/api/restos',
        data: resto
        });
    };
      

    return {
      getAll: getAll,
      addOne: addOne
    }
});