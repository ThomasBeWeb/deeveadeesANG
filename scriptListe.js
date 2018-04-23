//Liaison entre la directive ng-app et la couche métier
var managementModule = angular.module("listeManagement", []);

managementModule.controller("listeDefilms", function ($scope, $http) {

    $scope.films = []; //Liste de tous les filsm
    $scope.listInfos = []; //Infos complete d'un seul film

    // $scope.film = {
    //     id: 0,
    //     titre: "",
    //     genre: "",
    //     annee: "",
    //     realisateur: "",
    //     image: "",
    //     acteurs: "",
    //     synopsis: "",
    //     trailer: ""
    // };

    $http.get("https://fierce-peak-88942.herokuapp.com/films").then(function (response) {
        $scope.films = response.data;
    });

    //Fonction replissant les champs de gauche pour edition
    $scope.editFilm = function (id) {

        for (var i = 0; i < $scope.films.length; i++) {

            if ($scope.films[i].id === id) {

                $scope.listInfos = $scope.films[i];

            }
        }

        $scope.upTitre = $scope.listInfos.titre;

    }

    $scope.saveFilm = function (id) {

        console.log($scope.upTitre);

        // var titre = $("#titre").val();
        // var annee = $("#annee").val();
        // var genre = $("#genre").val();
        // var synopsis = $("#synopsis").val();
        // var acteurs = $("#acteurs").val();
        // var realisateur = $("#realisateur").val();
        // var image = $("#affiche").val();
        // var trailer = $("#trailer").val();

        // var filmUp = {
        //     id: 0,
        //     titre: titre,
        //     genre: genre,
        //     annee: annee,
        //     realisateur: realisateur,
        //     image: image,
        //     acteurs: acteurs,
        //     synopsis: synopsis,
        //     trailer: trailer
        // }
    }
});


// //SAUVEGARDER LES MODIFICATIONS
// function saveMovie(idUp) {

//     var titre = $("#titre").val();
//     var annee = $("#annee").val();
//     var genre = $("#genre").val();
//     var synopsis = $("#synopsis").val();
//     var acteurs = $("#acteurs").val();
//     var realisateur = $("#realisateur").val();
//     var image = $("#affiche").val();
//     var trailer = $("#trailer").val();

//     var filmUp = {
//                 id: 0,
//                 titre: titre,
//                 genre: genre,
//                 annee: annee,
//                 realisateur: realisateur,
//                 image: image,
//                 acteurs: acteurs,
//                 synopsis: synopsis,
//                 trailer: trailer
//         }

//     $.ajax({
//         type:"POST",
//         url:"https://fierce-peak-88942.herokuapp.com/films/up/" + idUp,
//         data: filmUp,

//         success : function(data) {
//             //Reaffiche la table
//             listeDeFilms = data;
//             showTable();
//         },
//         error : function(param1,param2) {
//             alert("erreur");
//         }
//     });
// }

// //SUPPRIMER UN FILM
// function deleteMovie(idDel) {

//     $.ajax({
//         type:"POST",
//         url:"https://fierce-peak-88942.herokuapp.com/films/del/" + idDel,

//         success : function(data) {
//             //Reaffiche la table
//             listeDeFilms = data;
//             showTable();
//         },
//         error : function(param1,param2) {
//             alert("erreur");
//         }
//     });
// }
