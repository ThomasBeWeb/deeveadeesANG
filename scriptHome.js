//Liaison entre la directive ng-app et la couche métier
var deeveadeesModule = angular.module("deeveadees", []);

deeveadeesModule.controller("listeDefilms", function ($scope, $http, $sce) {

    $scope.films = []; //Liste de tous les filsm
    $scope.listInfos = []; //Infos complete d'un seul film

    $http.get("https://fierce-peak-88942.herokuapp.com/films").then(function (response) {
        $scope.films = response.data;
    });

    //Fonction autorisant les liens Youtube
    $scope.trustSrcurl = function (data) {
        return $sce.trustAsResourceUrl(data);
    }

    //Fonction retournant un film et ses infos pour affichage dans modal
    $scope.detail = function (id) {

        for (var i = 0; i < $scope.films.length; i++) {

            if ($scope.films[i].id === id) {

                $scope.listInfos = $scope.films[i];

            }
        }
    }
});