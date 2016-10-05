app.factory('mainFactory', MainFactory);

function MainFactory($http, $q){
	return {
	   'flog' : flog
	}

	function flog(bool){
		return bool=!bool;
	}
}