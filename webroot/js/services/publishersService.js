app.service('Publishers', function ($rootScope,dialogService) {

     var self = {

     	reports : [],
		total : [],
		privilegio : [],
		colorPrivilegio : [],
		groups : [],
		changed : false,

		listAll : function(){
			$.ajax({
				url: $rootScope.base_url + "/publishers/listar",
				type: "POST",
				//data: {id:id},
				success: function (response) {

					$rootScope.Publishers.publishers = response;
					self.organize(response,$rootScope.month,$rootScope.year);
					$rootScope.$digest();
				}
			});

		},

		organize : function(){
            self.reports = [];
            self.total = [];
            self.totalP = [];

            var publicacoes = 0;
			var videos = 0;
			var horas = 0;
			var revisitas = 0;
			var estudos = 0;
			var p = 0;
			var pA = 0;
			var pR = 0;
			var inativos = 0;

			self.privilegio[1] = "Publicador";
			self.privilegio[2] = "P. auxiliar";
			self.privilegio[3] = "P. regular";

			self.colorPrivilegio[1] = "white";
			self.colorPrivilegio[2] = "blue";
			self.colorPrivilegio[3] = "green";

			var count = 0;

			for(pub of self.publishers){
				
				var rel = pub.relatorio.find(r => r.mes === $rootScope.month && r.ano === $rootScope.year);

				if(!self.reports[pub.id_group]){
                	self.reports[pub.id_group] = [];
                	self.reports[pub.id_group].idGroup = pub.id_group;
                	self.reports[pub.id_group].nameGroup = self.groups[pub.id_group-1].nome;
                }

				if(rel){

					self.reports[pub.id_group].push({...pub,...rel});

					publicacoes += rel.publicacoes ? rel.publicacoes : 0;
					videos += rel.videos ? rel.videos : 0;
					horas += rel.horas ? rel.horas : 0;
					revisitas += rel.revisitas ? rel.revisitas : 0;
					estudos += rel.estudos ? rel.estudos : 0;
					
					if(rel.privilegio === 1){
						p++;
					}else if(rel.privilegio === 2){
						pA++;
					}else if(rel.privilegio === 3){
						pR++;
					}

					if(!self.totalP[rel.privilegio]){
						self.totalP[rel.privilegio] = [];
						self.totalP[rel.privilegio].idGroup = rel.privilegio;
						self.totalP[rel.privilegio].nameGroup = self.privilegio[rel.privilegio];

						self.totalP[rel.privilegio].publicacoes = 0;
						self.totalP[rel.privilegio].videos = 0;
						self.totalP[rel.privilegio].horas = 0;
						self.totalP[rel.privilegio].revisitas = 0;
						self.totalP[rel.privilegio].estudos = 0;
						self.totalP[rel.privilegio].cont = 0;
					}

					self.totalP[rel.privilegio].publicacoes +=  rel.publicacoes ? rel.publicacoes : 0;
					self.totalP[rel.privilegio].videos += rel.videos ? rel.videos : 0;
					self.totalP[rel.privilegio].horas += rel.horas ? rel.horas : 0;
					self.totalP[rel.privilegio].revisitas += rel.revisitas ? rel.revisitas : 0;
					self.totalP[rel.privilegio].estudos += rel.estudos ? rel.estudos : 0;
					self.totalP[rel.privilegio].cont++;
					
				}else{

					pub.publicacoes = 0;
					pub.videos = 0;
					pub.horas = 0;
					pub.revisitas = 0;
					pub.estudos = 0;
					pub.privilegio = pub.tipo;
					pub.obs = "";
					pub.mes = $rootScope.month;
					pub.ano = $rootScope.year;
					self.reports[pub.id_group].push(pub);

				}

				if(self.reports[pub.id_group][self.reports[pub.id_group].length -1].horas === 0
					&& (!self.reports[pub.id_group][self.reports[pub.id_group].length -1].desativado)){
						inativos++;
					}
			}

            self.total.p = p;
            self.total.pA = pA;
			self.total.pR = pR;
			self.total.inativos = inativos;
			self.total.publicacoes = publicacoes;
			self.total.videos = videos;
			self.total.horas = horas;
			self.total.revisitas = revisitas;
			self.total.estudos = estudos;
		},

		changedDate : function(opMonth){

			if($rootScope.month == 12 && opMonth > 0){
            	$rootScope.month = 1;
            	$rootScope.year += 1; 
            }else if($rootScope.month == 1 && opMonth < 0){
            	$rootScope.month = 12;
            	$rootScope.year -= 1; 
            }else{
            	$rootScope.month += opMonth;
            }

			self.organize();
		},

		save : function(){
			for (let i = 1; i < self.reports.length; i++) {
// 			for(group of self.reports){
				for(report of self.reports[i]){
					if (report.changed){
						var dataSend = {};

						dataSend.id_pub = report.id; // id do publicador
						dataSend.id_rel = report.id_rel ? report.id_rel : 0;
						dataSend.publicacoes = report.publicacoes;
						dataSend.videos = report.videos;
						dataSend.horas = report.horas;
						dataSend.revisitas = report.revisitas;
						dataSend.estudos = report.estudos;
						dataSend.privilegio = parseInt(report.privilegio);
						dataSend.mes = report.mes;
						dataSend.ano = report.ano;
						dataSend.id_group = report.id_group;

						$.ajax({
							url: $rootScope.base_url + "/publishers/save",
							type: "POST",
							data: dataSend,
							success: function (response) {

								self.changed = false;
							}
						});
					}
				}

			}
           
		},

        changedCell : function(rel){
            self.reports[rel.id_group].filter(r=>r.id === rel.id).forEach(p=>{
            	p.changed = true;
			});
			self.changed = true;
		},  

		listGroups : function(){
            $.ajax({
				url: $rootScope.base_url + "/publishers/listgroups",
				type: "POST",
				//data: {id:id},
				success: function (response) {

					$rootScope.Publishers.groups = response;
					$rootScope.$digest();
				}
			});
		},

		showPublisher : function(pub){

			var options = {
				autoOpen: false,
				modal: true,
				title: "Informações de publicador",
				width: 600,
				resizable:false,	
				dialogClass: "noclose",			
				close: function(){
					$rootScope.form = [];
					
				}
			};
			model = []
			$rootScope.form = [];
			if(pub){
				$rootScope.form.id = pub.id;
				$rootScope.form.name = pub.nome;
				$rootScope.form.email = pub.email;
				$rootScope.form.address = pub.endereco;
				$rootScope.form.tipo = pub.tipo;
				$rootScope.form.dt_nasc = pub.dt_nasc;
				$rootScope.form.dt_batismo = pub.dt_batismo;
				$rootScope.form.fone = pub.fone;
				$rootScope.form.id_group = pub.id_group;
			}else{
				$rootScope.form.tipo = 1;
				$rootScope.form.id_group = 1;
			}
			$rootScope.dialogService.open('addPublisher','addPublisher', model, options).then();

		},

		alterPublisher : function(pub){

			var dataSend = {};

            dataSend.id = $rootScope.form.id ? $rootScope.form.id : 0;
			dataSend.nome = $rootScope.form.name;
			dataSend.email = $rootScope.form.email;
			dataSend.endereco = $rootScope.form.address;
			dataSend.tipo = $rootScope.form.tipo;
			dataSend.dt_nasc = $rootScope.form.dt_nasc;
			dataSend.dt_batismo = $rootScope.form.dt_batismo;
			dataSend.fone = $rootScope.form.fone;

            $.ajax({
				url: $rootScope.base_url + "/publishers/alterpublisher",
				type: "POST",
				data: dataSend,
				success: function (response) {
                    $rootScope.dialogService.close('addPublisher');
				}
			});

		},

		modClose : function(){
			dialogService.close('addPublisher');
		}
          

     }


     return self;
     
});