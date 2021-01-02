app.controller('PublishersController', function (

	$rootScope,
	$scope,
	dialogService,
	Publishers
) {

// 	$scope.form = [];
// 	$scope.form.error = [];
	$rootScope.dialogService = dialogService;	

	$scope.initialize = function (base_url) {
		$rootScope.base_url = base_url;

		var d = new Date();
		$rootScope.month = (d.getMonth() + 1);
		$rootScope.year = d.getFullYear();

		$rootScope.Publishers = Publishers;
		Publishers.listGroups();
		Publishers.listAll();

		$("#publishers_table tr").click(function() {
			var selected = $(this).hasClass("highlight");
			$("#data tr").removeClass("highlight");
			if(!selected)
					$(this).addClass("highlight");
		});
		// $(document).ajaxSend(function (event, request, settings) {
		// 	request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		// });
	}
	


});