    
<? $general_url = $this->Url->build(["controller" => "","action" => ""]); ?>
<div ng-controller="PublishersController" data-ng-init='initialize("<?=$general_url?>")'>
    <!-- <div>
        <button class='button button-2 ' ng-click="Publishers.save()"><?=__('Salvar')?></button>
    </div> -->
    <table id="publishers_table" class='small-12 top-10 table table-striped' role="grid" >
        <thead>
            <tr style="background-color: rgb(190, 229, 241);">
                <td><?=__('Nome')?></td>
                <td><?=__('Privilégio')?></td>
                <td><?=__('Publicações')?></td>
                <td><?=__('Videos')?></td>
                <td><?=__('Horas')?></td>
                <td><?=__('Revisitas')?></td>
                <td><?=__('Estudos')?></td>
                <td><?=__('Observação')?></td>
            </tr>
        </thead>

        <tbody ng-repeat="(key, group) in Publishers.reports">
                <tr style="margin: 0 auto;display: block;white-space: nowrap;text-overflow: ellipsis; ">
                    <td ng-if="$index > 0" style="vertical-align:middle; background-color: rgb(122, 243, 142);">
                        {{group.nameGroup}}
                    </td>
                </tr>
                <tr ng-if="(!publisher.desativado || Publishers.desativados)" ng-repeat="publisher in group  | filter:busca">
                    <input class="form-control" type="text" ng-model="busca" placeholder="Buscar" style="top:20px;vertical-align:middle">
					<label>
                        <input type="checkbox" ng-model="Publishers.desativados">Mostrar desativados
                    </label>
                    <!-- <td style="display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis; "> -->
                    <td style="vertical-align:middle" ng-click="Publishers.showPublisher(publisher)" >{{publisher.nome}}
                    <!-- <button ng-click="Publisher.showPublisher(publisher)" >{{publisher.nome}} </button> -->
                    <!-- <span ng-click="Publishers.showPublisher(publisher)" ng-model="publisher.nome" >{{publisher.nome}}</span> -->
                    </td>
                    <td style="vertical-align:middle">
                        <select ng-model="publisher.privilegio" ng-change="Publishers.changedCell(publisher)" >
							<option selected>{{Publishers.privilegio[publisher.privilegio]}}</option>
							<option ng-repeat="tipo in Publishers.privilegio" ng-If="tipo" value="{{$index}}">{{tipo}}</option>
						</select>
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.publicacoes" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.videos" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.horas" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.revisitas" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.estudos" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.obs">
                    </td>
                </tr>
                
        </tbody>
    </table>
	<div class="large-12 columns top-10">
        <table class='small-12 columns table-tbody-scroll' >
            <thead style="background-color: rgb(123, 182, 250)">
                <td width="150px"><?=__('')?></td>
                <td width="150px"><?=__('Quantos')?></td>
                <td width="150px"><?=__('Publicações')?></td>
                <td width="150px"><?=__('Vídeos')?></td>
                <td width="150px"><?=__('Horas')?></td>
                <td width="150px"><?=__('Revisitas')?></td>
                <td width="150px"><?=__('Estudos')?></td>
            </thead>

            <tbody ng-repeat="(key, tot) in Publishers.totalP track by $index">
                <tr>
                    <td ng-if="tot.nameGroup" style="vertical-align:middle; background-color: rgb(122, 243, 142);">
                        {{tot.nameGroup}}
                    </td>
                    <td width="150px" >{{tot.cont}}</td>
                    <td width="150px" >{{tot.publicacoes}}</td>
                    <td width="150px" >{{tot.videos}}</td>
                    <td width="150px" >{{tot.horas}}</td>
                    <td width="150px" >{{tot.revisitas}}</td>
                    <td width="150px" >{{tot.estudos}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
    <div class="large-12 columns top-10">
        <table class='small-12 columns table-tbody-scroll' >
            <thead style="background-color: rgb(243, 105, 105)">
                <td width="150px"><?=__('Publicadores')?></td>
                <td width="150px"><?=__('Pioneiros Auxiliares')?></td>
                <td width="150px"><?=__('Pioneiros Regulares')?></td>
				<td width="150px"><?=__('inativos')?></td>
                <td width="150px"><?=__('Publicações')?></td>
                <td width="150px"><?=__('Vídeos')?></td>
                <td width="150px"><?=__('Horas')?></td>
                <td width="150px"><?=__('Revisitas')?></td>
                <td width="150px"><?=__('Estudos')?></td>
            </thead>

            <tbody >
                <tr >
                    <td width="150px" >{{Publishers.total.p}}</td>
                    <td width="150px" >{{Publishers.total.pA}}</td>
                    <td width="150px" >{{Publishers.total.pR}}</td>
					<td width="150px" >{{Publishers.total.inativos}}</td>
                    <td width="150px" >{{Publishers.total.publicacoes}}</td>
                    <td width="150px" >{{Publishers.total.videos}}</td>
                    <td width="150px" >{{Publishers.total.horas}}</td>
                    <td width="150px" >{{Publishers.total.revisitas}}</td>
                    <td width="150px" >{{Publishers.total.estudos}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script type="text/ng-template" id="addPublisher">
        <div ng-controller='PublishersController'>
            <div class="row">
                <div class="large-12 ">
                    
                    <div class="large-6 columns">
                        <label><?=__('Nome')?>:
                            <input type="text" ng-model="form.name" />
                            <small ng-show='form.error.name' class="error" ng-bind-html='form.error.name'></small>
                        </label>
                    </div>

                    <div class="large-6 columns">
                        <label><?=__('Endereço')?>:
                            <input type="text" ng-model="form.address" />
                            <small ng-show='form.error.address' class="error" ng-bind-html='form.error.address'></small>
                        </label>
                    </div>
                </div>

                <div class="large-6 columns">
                    <label><?=__('Email')?>:
                        <input type="text" ng-model="form.email" />
                        <small ng-show='form.error.email' class="error" ng-bind-html='form.error.email'></small>
                    </label>
                </div>

                 <div class="large-6 columns">
                    <label ><?=__('Privilégio')?>
                        <select ng-model='form.tipo' >
                            <option value="">--<?=__('selecione')?>--</option>
                            <option value="1"><?=__('Publicador')?></option>
                            <option value="2"><?=__('P. Auxiliar')?></option>
                            <option value="3"><?=__('P. Regular')?></option>
                        </select>
                        <small ng-show='form.error.tipo' class="error" ng-bind-html='form.error.tipo'></small>
                    </label>
                </div>

                 <div class="large-6 columns">
                    <label ><?=__('Grupo')?>
                        <select ng-model='form.id_group' >
                            <option value="">--<?=__('selecione')?>--</option>
                            <option value="1"><?=__('Santa Cruz do Timbó')?></option>
                            <option value="2"><?=__('Irineópolis')?></option>
                        </select>
                        <small ng-show='form.error.id_group' class="error" ng-bind-html='form.error.id_group'></small>
                    </label>
                </div>
            </div>

            <!-- <div class="row">
                <div class="large-6 columns">
                    <label><?=__('Senha')?>:
                        <input type="password" ng-model="form.password" />
                    </label>
                    <small ng-show='form.error.password' class="error" ng-bind-html='form.error.password'></small>
                </div>
                <div class="large-6 columns">
                    <label><?=__('Confirmação da senha')?>
                        <input type="password" ng-model="form.password_confirm" />
                    </label>
                    <small ng-show='form.error.password_confirm' class="error" ng-bind-html='form.error.password_confirm'></small>
                </div>
            </div> -->

            <div class="large-6 columns">
                <label><?=__('Data de Nascimento')?>:
                    <input type="text" ng-model="form.dt_nasc" />
                    <small ng-show='form.error.dt_nasc' class="error" ng-bind-html='form.error.dt_nasc'></small>
                </label>
            </div>

            <div class="large-6 columns">
                <label><?=__('Data de Batismo')?>:
                    <input type="text" ng-model="form.dt_batismo" />
                    <small ng-show='form.error.dt_batismo' class="error" ng-bind-html='form.error.dt_batismo'></small>
                </label>
            </div>

            <div class="large-6 columns">
                <label><?=__('Fone')?>:
                    <input type="text" ng-model="form.fone" />
                    <small ng-show='form.error.fone' class="error" ng-bind-html='form.error.fone'></small>
                </label>
            </div>
            
            <div class="large-12 columns"><small ng-show="message_success"  ng-bing-html="message_success" class="success"></small></div>
            <div class="large-12 columns  top-10"><div class='divider2'></div></div>

            <div class="large-12 columns ">
                <div class="text-right">
                    <button class='button button-2 ' ng-click="Publishers.alterPublisher(pubSelected)"><?=__('Confirmar')?></button>
                    <button class='button button-2 alert'  ng-click="Publishers.modClose()"><?=__('Cancelar')?></button>
                </div>
            </div>

    <table id="publishers_table" class='small-12 top-10 table table-striped' role="grid" >
        <thead>
            <tr style="background-color: rgb(190, 229, 241);">
                <td><?=__('Privilégio')?></td>
                <td><?=__('Publicações')?></td>
                <td><?=__('Videos')?></td>
                <td><?=__('Horas')?></td>
                <td><?=__('Revisitas')?></td>
                <td><?=__('Estudos')?></td>
                <td><?=__('Observação')?></td>
            </tr>
        </thead>

        <tbody ng-repeat="(key, group) in Publishers.reports">
                <tr style="margin: 0 auto;display: block;white-space: nowrap;text-overflow: ellipsis; ">
                    <td ng-if="$index > 0" style="vertical-align:middle; background-color: rgb(122, 243, 142);">
                        {{group.nameGroup}}
                    </td>
                </tr>
                <tr ng-if="(!publisher.desativado || Publishers.desativados)" ng-repeat="publisher in group  | filter:busca">
                    <input class="form-control" type="text" ng-model="busca" placeholder="Buscar" style="top:20px;vertical-align:middle">
					<label>
                        <input type="checkbox" ng-model="Publishers.desativados">Mostrar desativados
                    </label>
                    <!-- <td style="display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis; "> -->
                    <!-- <button ng-click="Publisher.showPublisher(publisher)" >{{publisher.nome}} </button> -->
                    <!-- <span ng-click="Publishers.showPublisher(publisher)" ng-model="publisher.nome" >{{publisher.nome}}</span> -->
                    </td>
                    <td style="vertical-align:middle">
                        <select ng-model="publisher.privilegio" ng-change="Publishers.changedCell(publisher)" >
							<option selected>{{Publishers.privilegio[publisher.privilegio]}}</option>
							<option ng-repeat="tipo in Publishers.privilegio" ng-If="tipo" value="{{$index}}">{{tipo}}</option>
						</select>
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.publicacoes" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.videos" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.horas" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.revisitas" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.estudos" onfocus="this.select();" onmouseup="return false;">
                    </td>
                    <td>
                        <input style="text-align:center" type="text" ng-change="Publishers.changedCell(publisher)" 
                        ng-model="publisher.obs">
                    </td>
                </tr>
                
        </tbody>
    </table>
    </div>
</script>
            
</div>

