angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.restaurants = [
        {name:'Le Relax',minimum:2000, price:'€', time:'25-30', livraison:'1500', url:'../IMAGE/relax.jpg'},
        {name:'Amandine',minimum:1500, price:'€', time:'30-40', livraison:'1500', url:'../IMAGE/amandine.jpg'},
        {name:"L'olympien",minimum:5000, price:'€€€', time:'25-30', livraison:'1500', url:'../IMAGE/olympien.jpg'},
        {name:'Bobsi',minimum:1500, price:'€', time:'25-30', livraison:'1500', url:'../IMAGE/bobsi.jpg'},
        {name:"Guido's Pizza",minimum:5000, price:'€€', time:'25-30', livraison:'1500', url:'../IMAGE/guidos.jpg'},
        {name:'Sigma Burger',minimum:2500, price:'€€', time:'25-30', livraison:'1500', url:'../IMAGE/sigma.jpg'},
    ];
    $scope.quartiers = ['Quartier du fleuve', 'Quartier du fleuve - Ambassade de France', 'ACI 2000', 'Hamdallaye', 'Dar Salam',
    'Bamako Koura', 'Médina Koura', 'Bozola', 'Cité du Niger'];
});

