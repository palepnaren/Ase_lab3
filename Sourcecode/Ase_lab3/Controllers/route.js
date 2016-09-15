(function()
{
    var app = angular.module('Naren',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
            .when('/Login',{
           controller:'Login_Controller',
           templateUrl:'Ase_lab3/Views/Login.html'
        }).when('/Home',{
            controller: 'Home_Controller',
            templateUrl : 'Ase_lab3/Views/Home.html'
        }).when('/Reg',{
             controller:'Reg_Controller',
            templateUrl : 'Ase_lab3/Views/Register.html'
        })
        .otherwise({redirectTo:'/Login'});
        
    });
    
}());