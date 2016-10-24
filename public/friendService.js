angular.module('userProfiles')
.service('friendService', function( $http ) {
    return {

    login: function( user ) {
      return $http.post('/api/login', user);
      }

    }

});
