(function (app) {
    'use strict';

    app.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '/angular/Articles/_articles.html'
            //controller: 'articlesCtrl'
            // controllerAs: 'vm',
            // title: 'Login'
        })
        .when('/login', {
            templateUrl: '/angular/Login/_login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
            // title: 'Login'
        })
        .when('/article/create', {
            templateUrl: '/angular/CreateUpdateArticle/_createUpdateArticle.html',
            // controller: 'loginCtrl',
            // controllerAs: 'vm'
            // title: 'Login'
        })
        .when('/article/update/:id', {
            templateUrl: '/angular/CreateUpdateArticle/_createUpdateArticle.html',
            // controller: 'loginCtrl',
            // controllerAs: 'vm'
            // title: 'Login'
        })

            // .when('/devices/:page', {
            //     templateUrl: '/Scripts/app/js/Devices/_devices.html',
            //     controller: 'devicesCtrl',
            //     controllerAs: 'vm',
            //     title: 'Devices'
            // })
            // .when('/device/:id', {
            //     templateUrl: '/Scripts/app/js/Details/_details.html',
            //     controller: 'detailsCtrl',
            //     controllerAs: 'vm',
            //     title: 'Device'
            // })
            // .when('/settings',
            // {
            //     templateUrl: '/Scripts/app/js/Settings/_settings.html',
            //     controller: 'settingsCtrl',
            //     controllerAs: 'vm',
            //     title: 'Settings'
            // })
            // .when('/manager',
            // {
            //     templateUrl: '/Scripts/app/js/Manager/_manager.html',
            //     controller: 'managerCtrl',
            //     controllerAs: 'vm',
            //     title: 'Manager'
            // })
            // .when('/my-requests',
            // {
            //     templateUrl: '/Scripts/app/js/MyRequests/_myRequests.html',
            //     title: 'My requests'
            // })
            // .when('/users',
            // {
            //     templateUrl: '/Scripts/app/js/User/usersRolesEdit.html',
            //     title: 'Users roles edit',
            //     controller: 'usersRolesCtrl',
            //     controllerAs: 'vm'
            // })
            .otherwise(
            {
                redirectTo: '/'
            });
    }
})(angular.module('app'));
