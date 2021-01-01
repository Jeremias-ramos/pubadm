app = angular.module("sys_admin", ["ngSanitize",
"dialogService",
"angularUtils.directives.dirPagination",
"ngFileUpload",
"angularSpinner",
"environment"
    ], function($httpProvider,$compileProvider){

    var param = function(obj) {
      var query = "", name, value, fullSubName, subName, subValue, innerObj, i;

      for(name in obj) {
          value = obj[name];
          if(value instanceof Array) {
            for(i=0; i<value.length; ++i) {
              subValue = value[i];
              fullSubName = name + "[" + i + "]";
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + "&";
            }
        }else if(value instanceof Object) {
          for(subName in value) {
              subValue = value[subName];
              fullSubName = name + "[" + subName + "]";
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + "&";
            }
        }else if(value !== undefined && value !== null)
          query += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
        }

      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== "[object File]" ? param(data) : data;
    }];
});

//Shifting variables depending on environment
app.config(function(envServiceProvider) {        
	// set the domains and variables for each environment 
    envServiceProvider.config({
        domains: {
            dev_remote_db: ["127.0.0.1"],
        	dev: ["localhost"],
        },
        vars: {
            
        }
    });
    // run the environment check, so the comprobation is made 
    // before controllers and services are built 
    envServiceProvider.check();
});

//Usado para baixar arquivos
app.config(["$compileProvider",
            function ($compileProvider) {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
        }]);

function UrlExists(url){
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status!=404;
}