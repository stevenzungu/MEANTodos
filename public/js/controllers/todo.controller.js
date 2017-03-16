(function(){
  angular.module('MEANTodos')
  .controller('TodoController', TodoController);

  TodoController.$inject = ['$scope'];

  function TodoController($scope){
    $scope.message = 'I work';
    $scope.greeting = 'Hello';
    $scope.print = print;

    function print(something){
      console.log(something);
    }
  }
})()
