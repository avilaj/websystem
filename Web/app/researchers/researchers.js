'use strict';

angular.module('Researchers', ['Core'])
    .config(function($stateProvider) {
        $stateProvider
            .state('researchers.list', {
                url: "/",
                templateUrl: "researchers/list.html",
                controller: 'researchers.list'
            })
            .state('researchers', {
                url: "/new",
                templateUrl: "researchers/edit.html",
                controller: 'researchers.new'
            })

    });


angular.module('Button',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

angular.module('Input',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('InputCtrl', function($scope) {
    });

angular.config(function($mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');
});
