angular.module('scratch', [])



.controller('restoCtrl', function($scope) {
  $scope.title = "Best restaurants I've been so far... ";
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
});


// .controller('mainCtrl', function($scope, $http) {
//   $scope.formData = {};
//   $scope.restos = [];
  
//   $http.get('/api/restos')
//     .success(function(data) {
//       $scope.restos = data;
//       console.log(data);
//     })
//     .error(function(data) {
//       console.log('Error: ' + data);
//     });

//   $http.createResto = function() {
//     $http.post('/api/restos', $scope.formData)
//       .success(function(data) {
//       $scope.formData = {};   //clear form before creating new one
//       $scope.restos = data;
//       console.log(data);
//     })
//     .error(function(data) {
//       console.log('Error: ' + data);
//     });
//   };
  
  
// });