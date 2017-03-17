(function(){
  angular.module('MEANTodos')
  .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];  //$http == axios

  function TodoService($http){
    var baseURL = '/todos';

    function getAll(){
      return $http.get(baseURL);

    }


    return {
      getAll: getAll
    };
  }
})()
