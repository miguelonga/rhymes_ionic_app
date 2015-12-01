angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BattlesCtrl', function($scope, battleService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.battles = battleService.all;
 
  // $scope.remove = function(battle) {
  //   Battles.remove(battle);
  // };


})

.controller('BattleDetailCtrl', function($scope, $timeout, $stateParams, Battles) {

  $scope.battle = Battles.get($stateParams.battleId);

  $scope.theme = "Manten el micro pulsado para empezar y deslizado hacia la izquierda para acabar";

  $scope.themesonged = true;  
  
  $scope.asked = 0;

  $scope.isSounding = true;

  $scope.ask = function () {
    $scope.themesonged = false;
    
    $scope.asked++;
    $timeout(function (){
      // $scope.theme = $scope.battle.themeList[Math.floor(Math.random() * $scope.battle.themeList.length)];
      if ($scope.asked < 20) {
        $scope.theme = $scope.battle.themeList[$scope.asked]; 
      };
      if ($scope.asked == 20) {
        $scope.theme = "Pasa el micro"
      };
      if ($scope.asked > 20) {
        $scope.theme = $scope.battle.themeList[-($scope.asked - 3)]; 
      };
      $scope.themesonged = true;
    },400);
  }

  
  $scope.play = function (){

    if($scope.media){
      $scope.media.pause();
    }
    $scope.theme = "Toca el micro para cambiar el tema";
    $scope.media = new Audio();
    $scope.media.src = $scope.battle.audio;
    $scope.media.load();
    $scope.media.play();
    $scope.isSounding = false;
  }

  $scope.pause_class = "";
  $scope.pause = function (){
    $scope.media.pause();
    $scope.pause_class = "pause-class";
    $scope.theme = "";
    $timeout(function (){
      $scope.pause_class = "";
      $scope.theme = "Toca el micro para empezar";
    },700);
    

    
    $scope.isSounding = true;
  }




})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
