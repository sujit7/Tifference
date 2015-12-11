var app = angular.module('tifference', []);

app.controller('getTimeController',function($scope){
	//Initialization
	$scope.e=0;
	$scope.f=0;
	$scope.c=0;
	$scope.a=0;
	$scope.d=0;
	$scope.b=0;
	
	//Watching each input to comprehend with input type=number.
	$scope.$watch('[a,b,c,d,e,f]',function(){
		$scope.d = parseInt($scope.d);
		$scope.b = parseInt($scope.b);
		$scope.e = parseInt($scope.e);
		$scope.f = parseInt($scope.f);
		
		//calculating hour and minute difference based on am/pm selection
		$scope.hdiff = ($scope.c + $scope.f) - ($scope.a + $scope.e);
		$scope.mdiff = $scope.d - $scope.b;
		if($scope.mdiff < 0){
			$scope.mdiff=60+$scope.mdiff;
			$scope.hdiff--;
		}
		if($scope.hdiff < 0){
			$scope.hdiff+=24;
		}
		
	},true);
});



