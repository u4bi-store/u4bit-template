app.controller('main', mainController);

function mainController($scope, mainFactory){

	init();

	function init(){
		$scope.flog = mainFactory.flog(true);
        alert('flog: '+$scope.flog);

	}
}