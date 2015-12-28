var app = angular.module('tifference', []);

app.controller('getTimeController',function($scope, $filter){
	//Initialization
	$scope.e=0;
	$scope.f=0;
	$scope.c=0;
	$scope.a=0;
	$scope.d=0;
	$scope.b=0;
	$scope.date = new Date();
	$scope.setNow = {
	
		one:function(){
			this.date = new Date();
			$scope.a = parseInt($filter('date')(this.date,'h'));
			$scope.b = parseInt($filter('date')(this.date,'m'));
			if($filter('date')($scope.date,'a')=='AM')
				$scope.e=0;
			else if($filter('date')(this.date,'a')=='PM')
				$scope.e=12;
		},
		two:function(){
			this.date = new Date();
			$scope.c = parseInt($filter('date')(this.date,'h'));
			$scope.d = parseInt($filter('date')(this.date,'m'));
			if($filter('date')($scope.date,'a')=='AM')
				$scope.f=0;
			else if($filter('date')(this.date,'a')=='PM')
				$scope.f=12;
		}
	}
	//Watching each input to comprehend with input type=number.
	$scope.$watch('[a,b,c,d,e,f]',function(){
		$scope.d = parseInt($scope.d);
		$scope.b = parseInt($scope.b);
		$scope.e = parseInt($scope.e);
		$scope.f = parseInt($scope.f);
		$scope.a = $filter('roundOff12')($scope.a);
		$scope.c = $filter('roundOff12')($scope.c);
		
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

app.filter('roundOff12', function(){
	return function(hour){
		if(hour==12){
			hour=0;
			return hour;
		}
		else return hour
	}
	
});



