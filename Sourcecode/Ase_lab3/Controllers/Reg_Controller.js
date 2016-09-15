(function () 
 {
    
    
    var Register = function ($scope, $location) {
      
        $scope.show = false;
        
        
        $scope.match = function () {
            if ($scope.reg_Pwd != null && $scope.reg_Pwd != "" && $scope.reg_Cnf_Pwd != null && $scope.reg_Cnf_Pwd != "") {
                
                if ($scope.reg_Pwd == $scope.reg_Cnf_Pwd) {
                    $scope.show = false;
                }
                
                 else {
                    $scope.show = true;
                }
            }
            
        };
        
        $scope.reg = function () {
            
            var user = document.getElementById("reg_Email_id").value;
            var u_pwd = document.getElementById("reg_Pwd").value;
            if (typeof(Storage) != "undefined") {
                localStorage.setItem(user, u_pwd);
                alert("User registered successfully");
                $location.path('/');
               
            } 
        }
         
        
    };
    
    Register.$inject = ['$scope', '$location'];
    angular.module('Naren').controller('Reg_Controller', Register);

}());