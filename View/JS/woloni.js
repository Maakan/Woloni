angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.restaurants = [
        {name:'Le Relax',minimum:2000, price:'€', time:'', livraison:'1500', url:'../IMAGE/relax.jpg'},
        {name:'Amandine',minimum:1500, price:'€', time:'', livraison:'1500', url:'../IMAGE/amandine.jpg'},
        {name:"L'olympien",minimum:5000, price:'€€€', time:'', livraison:'1500', url:'../IMAGE/olympien.jpg'},
        {name:'Bobsi',minimum:1500, price:'€', time:'', livraison:'1500', url:'../IMAGE/bobsi.jpg'},
        {name:"Guido's Pizza",minimum:5000, price:'€€', time:'', livraison:'1500', url:'../IMAGE/guidos.jpg'},
        {name:'Sigma Burger',minimum:2500, price:'€€', time:'', livraison:'1500', url:'../IMAGE/sigma.jpg'},
    ];
    $scope.quartiers = ['Quartier du fleuve', 'Quartier du fleuve - Ambassade de France', 'ACI 2000', 'Hamdallaye', 'Dar Salam',
    'Bamako Koura', 'Médina Koura', 'Bozola', 'Cité du Niger'];
    $scope.tempsLivraison = function(tiek){
        switch(tiek){
            case 'Quartier du fleuve' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Quartier du fleuve - Ambassade de France' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'ACI 2000' :
                $scope.restaurants[0].time = '40-50';
                $scope.restaurants[1].time = '35-45';
                $scope.restaurants[2].time = '30-40';
                $scope.restaurants[3].time = '20-30';
                $scope.restaurants[4].time = '30-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Hamdallaye' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Dar Salam' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Bamako Koura' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Médina Koura' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Bozola' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            case 'Cité du Niger' :
                $scope.restaurants[0].time = '30-40';
                $scope.restaurants[1].time = '25-35';
                $scope.restaurants[2].time = '25-30';
                $scope.restaurants[3].time = '30-40';
                $scope.restaurants[4].time = '25-35';
                $scope.restaurants[5].time = '25-35';
            break;
            default : 
                tiek = 'Saisissez votre adresse de livraison';
        };
    };
});

