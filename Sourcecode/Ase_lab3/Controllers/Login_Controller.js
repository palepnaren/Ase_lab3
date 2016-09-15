(function () 
 {
    
    
    var Login = function ($scope, $location) {
      
        
        
        $scope.validate = function () {
            if ($scope.Email_id != null && $scope.Email_id != "" && $scope.Pwd != null && $scope.Pwd != "") {
                
            var id = localStorage.getItem($scope.Email_id);
           
               
                 if ( $scope.Pwd == id){
                    $location.path('/Home');
                }
                else{
                    alert("email or password wrong!!!");
                }
            
        }
        
       
        
    };
        $scope.fetch = function (paths){
            $location.path(paths);
            
        };

};

    
    Login.$inject = ['$scope', '$location'];
    angular.module('Naren').controller('Login_Controller', Login);

}());