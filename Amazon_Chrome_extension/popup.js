

let amazonextension = angular.module("amazonextension", ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: '/home.html'
        });
        $stateProvider
        .state('login',{
            url: '/login',
            templateUrl: '/login.html',
            controller: 'loginController'
        });
        $stateProvider
        .state('signup',{
            url: '/signup',
            templateUrl: '/signup.html',
            controller: 'signupController'
        });

        $urlRouterProvider.otherwise('login');
    }
])


amazonextension.controller("loginController", function ($scope, $http, $location) {
    $scope.authenticate = function (email, password) {
        $http({
            method : "POST",
            url : "http://localhost:3000/user/login",
            headers: { 'Content-Type': "application/json" },
            data: JSON.stringify({"email":email, "password":password})
        }).then(function mySuccess(response) {
            console.log(response.data);
            $location.path('/home');
        }, function myError(error) {
            console.log(error);
            $location.path('/login');
        });
        // //write authentication code here.. 
        // console.log("Hey");
        // let details = {"Action": "login","email": email, "password": password};
        // console.log(details);
        // chrome.runtime.sendMessage(details, (response) => {
        //     // 3. Got an asynchronous response with the data from the background
        //     console.log('background.js has received', response);
        //   });
        // $location.path('/home');
    };

    $scope.gotoSignIn = function() {
        $location.path('/signup')
    };

});

amazonextension.controller("signupController", function ($scope, $http, $location) {
    $scope.signupdetails = function (email, username, password) {
        $http({
            method : "POST",
            url : "http://localhost:3000/user/signup",
            headers: { 'Content-Type': "application/json" },
            data: JSON.stringify({"email":email, "username":username, "password":password})
        }).then(function mySuccess(response) {
            console.log(response.data);
            $location.path('/login');
        }, function myError(error) {
            console.log(error);
            $location.path('/signup');
        });
        // //write authentication code here.. 
        // console.log("Hey - Signup");
        // let sdetails = {"action": "signup", "email": email, "username": username, "password": password}
        // console.log(sdetails);
        // chrome.runtime.sendMessage(sdetails, (response) => {
        //     // 3. Got an asynchronous response with the data from the background
        //     console.log('background.js has received', response);
        //   });
        // $location.path('/home');
        
    };
});

