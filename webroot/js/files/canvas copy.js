// var myLines = [],
// myCircles = [],
// svg = null;
// var iR_R, iR_L;
// var clicks = 0;
// var obj1Spliter = 0;
// var verificaHistorico = 0;

// $(document).ready(function () {
//     var obj1;
//     var obj2;
//     var valor1;
//     var valor2;
//     var emendaNum = 1;
//     emendas = new Array();

//     $('.fibra').live('click',function(event, div){
//         //controle de usuarios
      
//         if(verificaHistorico == 1){
//             verificaHistorico = 0; 
//             return;
//         }else{
//             if(nivelUsuario ==0){ return; } 
//             if ($(this).hasClass("fibraHist")){ return;}
//             ultimaFibraClicada  = $(this);
//             if(clicks == 1){
//                 if(obj1.id == $(this).attr('id')){
//                     $(this).removeClass('ligado');
//                     clicks = 0;
//                     delete obj1;
//                     return;
//                 }
//             }
//             caixaId = $('#caixaEmendaAberta').attr('num_caixa');
//             if($(this).hasClass('ligado')){
//                 return;
//                 //se ja estiver ligado ele nao faz nada quando clica
//             }else{    
//                 if(tipoCaixaAberta == 'dio'){
//                     //se for dio
//                     if($(this).attr('spliter')){
//                         if(clicks == 0){
//                             obj1Spliter = 1;
//                             clicks = 1;
//                             valor1 = $(this).find("input:hidden").val();
//                             if(valor1 == 'In'){
//                                 valor1 = 0;
//                             }
//                             $(this).addClass('ligado');
//                             obj1 = $(this);
//                             obj1.id = $(this).attr('id');
//                             obj1.coluna = $(this).attr('coluna');
//                             obj1.cabo = $(this).attr('spliter');
//                             obj1.valor = valor1;
//                             obj1.tipo = 'spliter';                           

//                             obj1.cod_cores = $(this).attr('cod_cores');
//                             obj1.fibra = $(this).attr('num');
//                             obj1.fibras_tubo = $(this).attr('fibras_tubo');

//                             //extrair do id apenas o numero da emenda
//                             id1 = obj1.id.substring(6);
//                         }else if(clicks == 1){
//     						obj2 = $(this);
//     						obj2.tipo = 'spliter';
//                             flagdesenha = true;
//                             if((obj1.tipo == 'spliter')&&(obj2.tipo == 'spliter')) flagdesenha = false;
//     						if(obj1.attr('spliter') == obj2.attr('spliter')){
//     							$('#msgAlerts').html('Você não pode emendar o mesmo spliter')
//                                	$('#modalAlerts').dialog('open');
//     						}else if((obj1.find("input:hidden").val() == '0' && obj2.find("input:hidden").val() == '0')){
//     						   	$('#msgAlerts').html('Você não pode emendar duas entradas');
//                                	$('#modalAlerts').dialog('open');
//     						}else if((obj1.find("input:hidden").val() != '0') && (obj2.find("input:hidden").val() != '0') && (obj1.tipo == 'spliter')){
//     						   	$('#msgAlerts').html('Você não pode emendar duas saidas');
//                                 $('#modalAlerts').dialog('open');
//     						}else{
//                                 flagdesenha = true;//emenda
//                             }
//                             if(flagdesenha){
//     							obj1Spliter = 0;
//                                 nomeEquipamento = $('#equipNome'+id1).val();
//                                 if(nomeEquipamento){
//                                     if(nomeEquipamento == ''){
//                                         pai = $('#equipNome'+id1).parent();
//                                         pai.remove()
//                                         clicks = 2;
//                                         valor2 = $(this).find("input:hidden").val();
//                                         if(valor2 == 'In'){
//                                             valor2 = 0;
//                                         }
//                                         $(this).addClass('ligado');//ok
//                                         obj2 = $(this);
//                                         obj2.id = $(this).attr('id');
//                                         obj2.coluna = $(this).attr('coluna');
//                                         obj2.cabo = $(this).attr('spliter');
//                                         obj2.valor = valor1;
//                                         obj2.tipo = 'spliter';
                                        
//                                         obj2.cod_cores = $(this).attr('cod_cores');
//                                         obj2.fibra = $(this).attr('num');
//                                         obj2.fibras_tubo = $(this).attr('fibras_tubo');
                                        
//                                         //extrair do id apenas o numero da emenda
//                                         id2 = obj2.id.substring(6);
//                                     }else{
//                                         //ação executada pelo onblur do campo de texto
//                                         //executa automaticamente
//                                     }
//                                 }else{
//                                     clicks = 2;
//                                     valor2 = $(this).find("input:hidden").val();
//                                     if(valor2 == 'In'){
//                                         valor2 = 0;
//                                     }
//                                     $(this).addClass('ligado');
//                                     obj2 = $(this);
//                                     obj2.id = $(this).attr('id');
//                                     obj2.coluna = $(this).attr('coluna');
//                                     obj2.cabo = $(this).attr('spliter');
//                                     obj2.valor = valor1;
//                                     obj2.tipo = 'spliter';
                                    
//                                     obj2.cod_cores = $(this).attr('cod_cores');
//                                     obj2.fibra = $(this).attr('num');
//                                     obj2.fibras_tubo = $(this).attr('fibras_tubo');                                    
//                                     //extrair do id apenas o numero da emenda
//                                     id2 = obj2.id.substring(6);
//                                 }
//                             }
//                         }
//                     }else{
//                         //se nao for spliter
//                         if(clicks == 0){
//                             clicks = 1;
//                             valor1 = $(this).find("input:hidden").val();
//                             if(valor1 == 'In'){
//                                 valor1 = 0;
//                             }
//                             $(this).addClass('ligado');
//                             obj1 = $(this);
//                             obj1.id = $(this).attr('id');
//                             obj1.coluna = $(this).attr('coluna');
//                             obj1.cabo = $(this).attr('cabo');
//                             obj1.valor = valor1;
//                             obj1.tipo = 'cabo';
                           
//                             obj1.cod_cores = $(this).attr('cod_cores');
//                             obj1.fibra = $(this).attr('num');
//                             obj1.fibras_tubo = $(this).attr('fibras_tubo');
                            
//                             //extrair do id apenas o numero da emenda
//                             id1 = obj1.id.substring(6);
                           
//                             //jogar a tr pra dentro de uma div
//                             tr = $(this);

//                             //verificar se ja esta desenhado o select dos equipamentos
//                             tdequip = tr.find('td:last');
//                             if(tdequip.hasClass('selectSFP')||tdequip.hasClass('selectPorta')){
//                                 //se ja tiver o select de equipamento ele  nao faz nada
//                             }else{
//                                 $('#modalLoading').dialog('open');
//                                 $.ajax({
//                                     type:'POST',
//                                     data:{func:'buscaEquipamentos'},
//                                     url:'controller/Equipamentos.php',
//                                     success:function(resposta){
//                                         if(resposta != 'null'){
//                                             trUltimoEquip = tr;
//                                             tr.append('<td class="selectSFP"><select class="selectStyle3 selectEquipSFPdio" id="equipSFP'+id1+'"></select></td>');
//                                             $('#equipSFP'+id1).append('<option value="">--selecione--</option>');

//                                             resp = JSON.parse(resposta);
//                                             $.each(resp,function(key,value){
//                                                $('#equipSFP'+id1).append('<option value="'+value.id_equipamento+'">'+value.nome_equipamento+'</option>');
//                                             });
//                                         }
//                                         $('#modalLoading').dialog('close');
//                                     },
//                                     error:function(resposta){
//                                         alert('erro ao buscar equipamentos');
//                                     }
//                                     //a funcao para colocar as portas esta no controle.js

//                                 });
//                             }                            
//                         }else if(clicks == 1){
//                             nomeEquipamento = $('#equipNome'+id1).val();
//                             if(nomeEquipamento){
//                                 if(nomeEquipamento == ''){
                                   
//                                     clicks = 2;
//                                     valor2 = $(this).find("input:hidden").val();
//                                     if(valor2 == 'In'){
//                                         valor2 = 0;
//                                     }
//                                     //alert(targetValue);
//                                     $(this).addClass('ligado');

//                                     obj2 = $(this);
//                                     obj2.id = $(this).attr('id');
//                                     obj2.coluna = $(this).attr('coluna');
//                                     obj2.cabo = $(this).attr('cabo');
//                                     obj2.valor = valor2;  
//                                     obj2.tipo = 'cabo';
                                  
//                                     obj2.cod_cores = $(this).attr('cod_cores');
//                                     obj2.fibra = $(this).attr('num');
//                                     obj2.fibras_tubo = $(this).attr('fibras_tubo');              

//                                     //extrair do id apenas o numero da emenda
//                                     id2 = obj2.id.substring(6);
//                                      $('#equipNome'+id1).remove();
//                                 }else{
//                                     //ação executada pelo onblur do campo de texto
//                                 }
//                             }else{
//                                 clicks = 2;
//                                 valor2 = $(this).find("input:hidden").val();
//                                 if(valor2 == 'In'){
//                                     valor2 = 0;
//                                 }
//                                 //alert(targetValue);
//                                 $(this).addClass('ligado');

//                                 obj2 = $(this);
//                                 obj2.id = $(this).attr('id');
//                                 obj2.coluna = $(this).attr('coluna');
//                                 obj2.cabo = $(this).attr('cabo');
//                                 obj2.valor = valor2;  
//                                 obj2.tipo = 'cabo';
                                
//                                 obj2.cod_cores = $(this).attr('cod_cores');
//                                 obj2.fibra = $(this).attr('num');
//                                 obj2.fibras_tubo = $(this).attr('fibras_tubo');              

//                                 //extrair do id apenas o numero da emenda
//                                 id2 = obj2.id.substring(6); 
//                             }
//                         }
//                     }
//                 }else{                    
//                     //se for caixa emenda/atendimento
//                     if($(this).attr('spliter')){
//                         if(clicks == 0){
//                             obj1Spliter = 1;
//                             clicks = 1;
//                             valor1 = $(this).find("input:hidden").val();
//                             if(valor1 == 'In'){
//                                 valor1 = 0;
//                             }
//                             $(this).addClass('ligado');
//                             obj1 = $(this);
//                             obj1.id = $(this).attr('id');
//                             obj1.coluna = $(this).attr('coluna');
//                             obj1.cabo = $(this).attr('spliter');
//                             obj1.valor = valor1;
//                             obj1.tipo = 'spliter';

//                             obj1.cod_cores = $(this).attr('cod_cores');
//                             obj1.fibra = $(this).attr('num');
//                             obj1.fibras_tubo = $(this).attr('fibras_tubo');

//                             //extrair do id apenas o numero da emenda
//                             id1 = obj1.id.substring(6);
//                         }else if(clicks == 1){
//                             obj2 = $(this);
//                             obj2.tipo = 'spliter';
//                             flagdesenha = true;
//                             if((obj1.tipo == 'spliter')&&(obj2.tipo == 'spliter')) flagdesenha = false;
//                             if(obj1.attr('spliter') == obj2.attr('spliter')){
//                                 $('#msgAlerts').html('Você não pode emendar o mesmo spliter')
//                                 $('#modalAlerts').dialog('open');
//                             }else if((obj1.find("input:hidden").val() == '0' && obj2.find("input:hidden").val() == '0')){
//                                 $('#msgAlerts').html('Você não pode emendar duas entradas');
//                                $('#modalAlerts').dialog('open');
//                             }else if((obj1.find("input:hidden").val() != '0') && (obj2.find("input:hidden").val() != '0') && (obj1.tipo == 'spliter')){
//                                 $('#msgAlerts').html('Você não pode emendar duas saidas');
//                                 $('#modalAlerts').dialog('open');
//                              }else{
//                                   flagdesenha = true;//emenda
//                              }
//                             if(flagdesenha){
//     					 obj1Spliter = 0;
//                                 clicks = 2;
//                                 valor2 = $(this).find("input:hidden").val();
//                                 if(valor2 == 'In'){
//                                     valor2 = 0;
//                                 }
//                                 $(this).addClass('ligado');//ok
                                
//                                 obj2.id = $(this).attr('id');
//                                 obj2.coluna = $(this).attr('coluna');
//                                 obj2.cabo = $(this).attr('spliter');
//                                 obj2.valor = valor1;                              

//                                 obj2.cod_cores = $(this).attr('cod_cores');
//                                 obj2.fibra = $(this).attr('num');
//                                 obj2.fibras_tubo = $(this).attr('fibras_tubo');
                                
//                                 //extrair do id apenas o numero da emenda
//                                 id2 = obj2.id.substring(6);
//                             }
//                         }
//                     }else{
//                         if(clicks == 0){
//                             clicks = 1;
//                             valor1 = $(this).find("input:hidden").val();
//                             if(valor1 == 'In'){
//                                 valor1 = 0;
//                             }
//                             $(this).addClass('ligado');
//                             obj1 = $(this);
//                             obj1.id = $(this).attr('id');
//                             obj1.coluna = $(this).attr('coluna');
//                             obj1.cabo = $(this).attr('cabo');
//                             obj1.valor = valor1;
//                             obj1.tipo = 'cabo';

//                             obj1.cod_cores = $(this).attr('cod_cores');
//                             obj1.fibra = $(this).attr('num');
//                             obj1.fibras_tubo = $(this).attr('fibras_tubo');                            
//                             //extrair do id apenas o numero da emenda
//                             id1 = obj1.id.substring(6);
//                         }else{
//                             if(clicks == 1){
//                                 clicks = 2;
//                                 valor2 = $(this).find("input:hidden").val();
//                                 if(valor2 == 'In'){
//                                     valor2 = 0;
//                                 }
//                                  obj2 = $(this);
//                                  if(tipoCaixaAberta == 'pac'){
//                                       if(obj1.find("input:hidden").val() == 0 &&  $(this).attr('cod_cores') == 'PAC' ){
//                                             alert('Você não pode colocar um cabo UTP nessa porta');
//                                             clicks = 1;
//                                             valor2 = false;
//                                            return;
//                                        }
//                                       if( $(this).find("input:hidden").val() == 0 &&  obj1.attr('cod_cores') == 'PAC' ){
//                                             alert('Você não pode colocar um cabo UTP nessa porta');
//                                             clicks = 1;
//                                             valor2 = false;
//                                            return;
//                                        }
                                      
//                                       if(obj1.attr('cod_cores') != 'PAC'  &&  $(this).find("input:hidden").val() != 0 && $(this).attr('cod_cores') =='PAC' ){
//                                            alert('Você não pode colocar uma fibra nessa porta');
//                                            clicks = 1;
//                                            valor2 = false;
//                                            return;
//                                       }
                                      
//                                       if(obj1.attr('cod_cores') == 'PAC'  &&  obj1.find("input:hidden").val() != 0 && $(this).attr('cod_cores') !='PAC' ){
//                                            alert('Você não pode colocar uma fibra nessa porta');
//                                            clicks = 1;
//                                            valor2 = false;
//                                            return;
//                                       }

                                
                                      
//                                  }
//                                 //alert(targetValue);
//                                 $(this).addClass('ligado');

//                                 obj2 = $(this);
//                                 obj2.id = $(this).attr('id');
//                                 obj2.coluna = $(this).attr('coluna');
//                                 obj2.cabo = $(this).attr('cabo');
//                                 obj2.valor = valor2;  
//                                 obj2.tipo = 'cabo';

//                                 obj2.cod_cores = $(this).attr('cod_cores');
//                                 obj2.fibra = $(this).attr('num');
//                                 obj2.fibras_tubo = $(this).attr('fibras_tubo');              

//                                 //extrair do id apenas o numero da emenda
//                                 id2 = obj2.id.substring(6);
//                             }
//                         }
//                     }
//                 }
                 
                 
//                 if(clicks == 2){
//                     //calcular valor da perda
//                     if((obj1.cabo ==obj2.cabo)&&(obj1.fibra ==obj2.fibra)){
//                         perda = 0;
//                     }else{
//                         perda = 0.01;
//                     }

//                     //apagar o select do equipamento que nao sera ultilizado no dio
//                     if(trUltimoEquip){
//                         trUltimoEquip.addClass('ligado');
//                         trUltimoEquip.find('td:last').remove();    
//                     }

//                     //apagar o select da ultima porta que nao sera ultilizado no dio
//                     if(trUltimoEquip){
//                         ultimaTd = trUltimoEquip.find('td:last');    
//                         if(ultimaTd.find('select.selectPorta')){
//                             ultimaTd.remove();
//                         }
//                     }

//                     obj1Spliter = 0;
//     				clicks = 0;
                     
                    
                    
//                     $('#modalLoading').dialog('open');	
//                     //enviar ajax para alterar no banco esta emenda
//                     $.ajax({
//                         type:"POST",
//                         url:'controller/Emendas.php',
//                         data:{func:'novaEmenda',tipoIn: obj1.tipo,tipoOut:obj2.tipo,fibra_in:valor1, fibra_out:valor2, cabo_in:obj1.cabo, cabo_out:obj2.cabo,coluna1:obj1.coluna,coluna2:obj2.coluna, caixa:$('#caixaEmendaAberta').attr('num_caixa')},
//                         success:function(resposta){
//     						if(resposta.substring(0, 13) == 'Not connected'){
//     							obj1.removeClass("ligado");
//     							obj2.removeClass("ligado");
//     							$('#modalLoading').dialog('close');
//     							$('#msgAlerts').html('ERRO, emenda não salva, tente novamente');
//     							$('#modalAlerts').dialog('open');
//     							return;
//     						}else{
//     							resposta = resposta.split('_');
//     							obj1.attr('emenda', resposta[1]);
//     							obj2.attr('emenda', resposta[1]);
//                                          perda = resposta[2];
//                                          if(typeof(perda) == 'undefined'){
//                                               perda = 0.01;
//                                          }
                                         
//                                 //verificar o tipo da conexao
//                                 if((obj1.cabo == obj2.cabo)&&(obj1.fibra == obj1.fibra)){
//                                     tipoConexao = 'P';
//                                 }
//                                 if((obj1.cabo != obj2.cabo)||(obj1.fibra != obj2.fibra)){
//                                     tipoConexao = 'F';
//                                 }

//                             	if(obj1.attr('coluna') == 'left'){
//     								if(obj1.attr('spliter')){
//                                         outraEmenda2 = 's_plt_'+obj1.cabo+'_'+valor1; 
//                                     }else{
//                                         outraEmenda2 = 'f_inn_'+obj1.cabo+'_'+valor1;
//                                     }
//                             	}else if(obj1.attr('coluna') == 'right'){
//                                 	outraEmenda2 = 'f_out_'+obj1.cabo+'_'+valor1;
//                             	}
                            
//                             	if(obj2.attr('coluna') == 'left'){
//     								if (obj2.attr('spliter')) outraEmenda1 = 's_plt_'+obj2.cabo+'_'+valor2;
//                                 	else outraEmenda1 = 'f_inn_'+obj2.cabo+'_'+valor2;
//                             	}else if(obj2.attr('coluna') == 'right'){
//                                 	outraEmenda1 ='f_out_'+obj2.cabo+'_'+valor2;
//                             	}
    						
                                         
//                               if(tipoCaixaAberta != 'pac'){
//                                    //apenas em casos de caixa emenda e atendimento
//                                         if(obj1.attr('coluna') == 'left'){
//                                               $(obj1).prepend('<td class="alterarTipoConexao" caixa="'+caixaId+'" emenda="'+resposta[1]+'"title="Clique para mudar o tipo da conexão">'+tipoConexao+'</td>');
//                                               $(obj1).prepend('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda = "'+outraEmenda1+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');
//                                         }else if(obj1.attr('coluna') == 'right'){
//                                               $(obj1).append('<td class="alterarTipoConexao" caixa="'+caixaId+'" emenda="'+resposta[1]+'"title="Clique para mudar o tipo da conexão">'+tipoConexao+'</td>');
//                                               $(obj1).append('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda ="'+outraEmenda1+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');
//                                         }

//                                        if(obj2.attr('coluna') == 'left'){
//                                               $(obj2).prepend('<td class="alterarTipoConexao" caixa="'+caixaId+'" emenda="'+resposta[1]+'"title="Clique para mudar o tipo da conexão">'+tipoConexao+'</td>');                               
//                                               if((obj1.cabo == obj2.cabo)&&(obj1.fibra == obj2.fibra)){
//                                                   //se for passagem nao vai desenhar o campo de texto da perda em BDs
//                                               }else{
//                                                   $(obj2).prepend('<td  class="somenteNumero"><input style="margin:0px;padding:2px" type="text" class="perdaCampo grid10"   size="30" id="perdaCampo'+resposta[1]+'" value="'+perda+'"></td>');     
//                                               }                                    
//                                               $(obj2).prepend('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda = "'+outraEmenda2+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');
//                                         }else if(obj2.attr('coluna') == 'right'){
//                                               $(obj2).append('<td class="alterarTipoConexao" caixa="'+caixaId+'" emenda="'+resposta[1]+'"title="Clique para mudar o tipo da conexão">'+tipoConexao+'</td>');   
//                                               if((obj1.cabo == obj2.cabo)&&(obj1.fibra == obj2.fibra)){
//                                                   //se for passagem nao vai desenhar o campo de texto da perda em BDs
//                                               }else{
//                                                   $(obj2).append('<td class="somenteNumero"><input style="margin:0px;padding:2px" type="text" class="perdaCampo grid10"   size="30" id="perdaCampo'+resposta[1]+'" value="'+perda+'"></td>');    
//                                               }
//                                               $(obj2).append('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda ="'+outraEmenda2+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');                               
//                                         }
//                               } else{
                                                                      
//                                    //apenas em casos de PAC
//                                    if(obj1.attr('coluna') == 'left'){
//                                         $(obj1).prepend('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda = "'+outraEmenda1+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');
//                                    }else if(obj1.attr('coluna') == 'right'){
//                                         $(obj1).append('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda ="'+outraEmenda1+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');
//                                    }

//                                    if(obj2.attr('coluna') == 'left'){                
//                                         $(obj2).prepend('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda = "'+outraEmenda2+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');
//                                    }else if(obj2.attr('coluna') == 'right'){
//                                         $(obj2).append('<td><a href="#" class="tablectrl_small bDefault tipS apagarEmenda" emenda="'+resposta[1]+'" outraEmenda ="'+outraEmenda2+'" original-title="Remover emenda"><span class="iconb" data-icon=""></span></a></td>');                               
//                                    }
//                               }

//                                 svgDrawLine(obj1,obj2,obj1.cod_cores,obj2.cod_cores,obj1.fibra,obj2.fibra,obj1.fibras_tubo,obj2.fibras_tubo,resposta[0],false,false);
//                                 obj1 = null;
//                                 obj2 = null;
//                                 clicks = 0;
//                             }
//                         },
//                         error:function(reposta){

//                         },
//     					complete:function(){
//     						$('#modalLoading').dialog('close');		
//     					}
//                     });

//                     //emendas[emendaNum] = valor1+" / "+valor2+' * '+obj1.cabo+" / "+obj2.cabo+' + '+id1+" / "+id2;
//                     //$('#emendas').append( emendas[emendaNum]);
//                     emendaNum++;                       
//                 }
//             }  
//         }
//     });
// });


// function svgClear() {
//     svg.clear();
// }
   
// function svgDrawLine(eSource,eTarget,cod_cores_inn,cod_cores_out,fibra_in,fibra_out,fibras_tubo_inn,fibras_tubo_out, tipo_conexao, printFlag, montaCaixa) {
//         //qdo desenhar vai zerar as variaveis
//         clicks = 0;

        
//         if(cod_cores_inn == 'null'){ 
//              cod_cores_inn = 'PAC';        
//         }
//         if(cod_cores_out == 'null'){ 
//              cod_cores_out = 'PAC';
//         }
//         // esperar 500 milisegundos para desenhar a linha
//         setTimeout(function () {
//            //alert(fibra_in +","+ fibras_tubo_inn +' - '+ fibra_out +','+ fibras_tubo_inn );
//             numCorIn =  fibra_in % fibras_tubo_inn;
//             numCorOut = fibra_out % fibras_tubo_out;
          
//             if((numCorIn == 0)&&(fibra_in>1)){
//                 numCorIn = fibras_tubo_inn;  
//             }else{
//                 if(numCorIn == 0){
//                     numCorIn = 1;
//                 }
//             }
//             if((numCorOut == 0)&&(fibra_out>1)){
//                 numCorOut = fibras_tubo_out;    
//             }else{
//                 if(numCorOut == 0){
//                     numCorOut = 1;
//                 }
//             }
			
//             var source = eSource;
//             var target = eTarget;
                       
//             // origem -> fim ... da esquerda para a direita

//             var pos1 = source.attr('coluna');
//             var pos2 = target.attr('coluna');

           
//             if((pos1 == 'left') && (pos2 == 'left')){
//                 var space = 20;                
//                 if(tipoCaixaAberta == 'dio'){
//                     idHtmlS = source.attr('id').split('_');
//                     idHtmlT =  target.attr('id').split('_');

//                     if(montaCaixa){
//                         if((idHtmlS[1]=='plt')||( idHtmlT[1]=='plt')){
//                             var space = 300;                
//                         }
//                     }
//                 }

//                 iR_L++;
//                 //fibra in e out no caboin
// 				if(printFlag)var originX = (source.width()) + (source.offset().left) -5;
// 				else var originX = (source.width()) + (source.offset().left - $("#caixaEmendaDialog").offset().left -27);
// 				var originY = ((source.height() +  4) / 2) + (source.offset().top - $("#svgbasics").offset().top)-2;
 	
// 				if(printFlag) var endingX =  ((target.width()+target.offset().left)) -5;
// 				else var endingX =  ((target.width()+target.offset().left) - $("#caixaEmendaDialog").offset().left -27);
//                 var endingY = ((target.height() +  4) / 2) + (target.offset().top - $("#svgbasics").offset().top)-2;   
				
//                 if(cod_cores_inn == 'BRASILEIRO'){
//                     var colorIn = coresBR[numCorIn];
//                 }else{
//                      if((cod_cores_inn == 'B')||(cod_cores_inn == 'NB') ||(cod_cores_inn == 'PAC')){    
//                         var colorIn = coresBR[10];    
//                     }else{
//                         var colorIn = coresIN[numCorIn];
//                     }
//                 }
//                 if(cod_cores_out == 'BRASILEIRO'){                   
//                     var colorOut = coresBR[numCorOut];           
//                 }else{
//                      if((cod_cores_out == 'B')||(cod_cores_out == 'NB') ||(cod_cores_out == 'PAC')){
//                         var colorOut = coresBR[10];  
//                     }else{
//                         var colorOut = coresIN[numCorOut];           
//                     }
//                 }                
//                 // cria os 'comandos para criação das linhas'
//                 // http://raphaeljs.com/reference.html#path  
//                 endY = (originY+endingY)/2;   
//                 var a = "M" + originX + " " + originY + " L" + (originX + space + (iR_L* 10) +2.5) + " " + originY; // beginning
//                 var b =  "M" + (originX + space + (iR_L* 10)) + " " + originY + " L" + (originX + space+ (iR_L* 10)) + " " + (endY);  // diagonal line
                 
                 
//                     if(tipo_conexao == 'F'){		
// 					circleX =(originX + space+ (iR_L* 10));
// 					circleY = endY;
// 				}
                
//                 endY = (((originY+endingY)/2));   
// 				var c = "M" + endingX + " " + endingY + " L" + (originX + space+ (iR_L* 10) +2.5) + " " + endingY;
// 				var d =  "M" + (originX+space+ (iR_L* 10)) + " " + endingY + " L" + (originX +space+ (iR_L* 10)) + " " + (endY);

//                 var allin = a+" "+b;
//                 var allout = c+" "+d;
//             }else{
//                 if((pos1 == 'right') && (pos2 == 'right')){
//                     //fibra in e out no cabo out                 
//                     var space = 20;
// 					iR_R++;
					
// 					if(printFlag)var originX = source.offset().left -10;
//                     else var originX = source.offset().left - $("#caixaEmendaDialog").offset().left -27;
//                     var originY = ((source.height() +  4) / 2) + (source.offset().top - $("#svgbasics").offset().top)-2;

//                     if(printFlag) var endingX = target.offset().left -10;
// 					else var endingX = target.offset().left - $("#caixaEmendaDialog").offset().left -27;
//                     var endingY = (target.offset().top - $("#svgbasics").offset().top) + ((target.height() +  4) / 2)-2;    

//                     if(cod_cores_inn == 'BRASILEIRO'){
//                         var colorIn = coresBR[numCorIn];
//                     }else{
//                          if((cod_cores_inn == 'B')||(cod_cores_inn == 'NB')||(cod_cores_inn == 'PAC')){    
//                             var colorIn = coresBR[10];    
//                         }else{
//                             var colorIn = coresIN[numCorIn];
//                         }
//                     }
//                     if(cod_cores_out == 'BRASILEIRO'){                   
//                         var colorOut = coresBR[numCorOut];           
//                     }else{
//                          if((cod_cores_out == 'B')||(cod_cores_out == 'NB')||(cod_cores_out == 'PAC')){
//                             var colorOut = coresBR[10];  
//                         }else{
//                             var colorOut = coresIN[numCorOut];           
//                         }
//                     }
//                     // cria os 'comandos para criação das linhas'
//                     // http://raphaeljs.com/reference.html#path  
//                     endY = (originY+endingY)/2;   
//                     var a = "M" + originX + " " + originY + " L" + (originX - space-(iR_R*10)-2.5) + " " + originY; // beginning
//                     var b = "M" + (originX - space -(iR_R*10)) + " " + originY + " L" + (endingX - space-(iR_R*10)) + " " + (endY); // diagonal line
                    
//                     var allin = a+" "+b;
					
// 					if(tipo_conexao == 'F'){		
// 						circleX =(endingX - space-(iR_R*10));
// 						circleY = endY;
// 					}

//                     endY = (((originY+endingY)/2));   
//                     var c = "M" + (endingX - space-(iR_R*10)-2.5) + " " + endingY + " L" + endingX + " " + endingY; // ending
//                     var d = "M" + (endingX - space-(iR_R*10)) + " " + endingY + " L" + (endingX - space-(iR_R*10)) + " " + (endY); // diagonal line
                    
//                     var allout = c+" "+d;
//                 }else{                    
//                     if((pos1 == 'right') && (pos2 == 'left')){
//                         //fibra in e out no cabo out
                        
//                         var space = 20;
//                         var originX = source.offset().left - $("#caixaEmendaDialog").offset().left -27;
//                         var originY = ((source.height() +  4) / 2) + (source.offset().top - $("#svgbasics").offset().top)-2;

//                         var endingX =  (target.offset().left - $("#caixaEmendaDialog").offset().left) + (target.width()) -27;
//                 		var endingY = ((target.height() +  4) / 2) + (target.offset().top - $("#svgbasics").offset().top)-2;     					
// 						meio = ((originX-space)-(endingX + space))/2;
                            
//                         if(cod_cores_inn == 'BRASILEIRO'){
//                             var colorIn = coresBR[numCorIn];
//                         }else{
//                              if((cod_cores_inn == 'B')||(cod_cores_inn == 'NB')||(cod_cores_inn == 'PAC')){    
//                                 var colorIn = coresBR[10];    
//                             }else{
//                                 var colorIn = coresIN[numCorIn];
//                             }
//                         }

//                         if(cod_cores_out == 'BRASILEIRO'){                   
//                             var colorOut = coresBR[numCorOut];           
//                         }else{
//                              if((cod_cores_out == 'B')||(cod_cores_out == 'NB')||(cod_cores_out == 'PAC')){
//                                 var colorOut = coresBR[10];  
//                             }else{
//                                 var colorOut = coresIN[numCorOut];           
//                             }
//                         }
//                         // cria os 'comandos para criação das linhas'
//                         // http://raphaeljs.com/reference.html#path         
//                         endY = (originY+endingY)/2;   
//                         var a = "M" + originX + " " + originY + " L" + (originX - space -2) + " " + originY; // beginning
//                         var b = "M" + (originX - space) + " " + originY + " L" + ((endingX + space)+meio) + " " + endY; // diagonal line
                       
//                         //monta a linha toda
//                         var allin = a+" "+b;
						
// 						if(tipo_conexao == 'F'){		
// 							circleX =((endingX + space)+meio);
// 							circleY = endY;
// 						}                        
//                         endY = (((originY+endingY)/2));   
//                         var c = "M" + (endingX + space +2) + " " + endingY + " L" + endingX + " " + endingY; // ending
//                         var d = "M" + (endingX + space) + " " + endingY + " L" + ((endingX + space)+meio) + " " + (endY); // diagonal line
//                         var allout = c+" "+d;
//                      }else{						 
// 						if(printFlag) var originX = (source.width()) + (source.offset().left) - 5;
//                         else var originX = (source.width()) + (source.offset().left - $("#caixaEmendaDialog").offset().left) -27;
// 						var originY = ((source.height() +  4) / 2) + (source.offset().top - $("#svgbasics").offset().top)-2;

// 						if(printFlag) var endingX = target.offset().left - 10;
//                         else var endingX = target.offset().left - $("#caixaEmendaDialog").offset().left -27;
//                     	var endingY = (target.offset().top - $("#svgbasics").offset().top) + ((target.height() +  4) / 2)-2;   
//                         var space = 20;
                         
// 						meio = ((endingX-space)-(originX + space))/2;
//                         if(cod_cores_inn == 'BRASILEIRO'){
//                             var colorIn = coresBR[numCorIn];
//                         }else{
//                              if((cod_cores_inn == 'B')||(cod_cores_inn == 'NB')||(cod_cores_inn == 'PAC')){    
//                                 var colorIn = coresBR[10];    
//                             }else{
//                                 var colorIn = coresIN[numCorIn];
//                             }
//                         }

//                         if(cod_cores_out == 'BRASILEIRO'){                   
//                             var colorOut = coresBR[numCorOut];           
//                         }else{
//                              if((cod_cores_out == 'B')||(cod_cores_out == 'NB')||(cod_cores_out == 'PAC')){
//                                 var colorOut = coresBR[10];  
//                             }else{
//                                 var colorOut = coresIN[numCorOut];           
//                             }
//                         }                     
//                         // cria os 'comandos para criação das linhas'
//                         // http://raphaeljs.com/reference.html#path  
//                         endY = (originY+endingY)/2;   
//                         var a = "M" + originX + " " + originY + " L" + (originX + space +2) + " " + originY; // beginning
//                         var b = "M" + (originX + space) + " " + originY + " L" + ((endingX - space)-meio) + " " + (endY); // diagonal line
                        
//                         var allin = a+ " " + b ;
						
// 						if(tipo_conexao == 'F'){		
// 							circleX =((endingX - space)-meio);
// 							circleY = endY;
// 						}
						
//                         endY = (((originY+endingY)/2));   
//                         var c = "M" + (endingX - space - 2) + " " + endingY + " L" + endingX + " " + endingY; // ending
//                         var d = "M" + (endingX - space) + " " + endingY + " L" + ((endingX - space)-meio) + " " + (endY); // diagonal line                     
                        
//                         var allout = c+ " " + d ;
//                     }
//                 }              
//             }
            
//             // escreve a linha
//             //if(printFlag && colorOut == "white")
//             target.attr('numcanvas',myLines.length );
            
//             if(colorOut == "white"){
//                 if(printFlag){
//                     myLines[myLines.length] = svg
//                         .path(allout)
//                         .attr({
//                            "stroke": "black",
//                            "stroke-width": 5,
//                            "stroke-dasharray": "---"
//                     });
//                     myLines[myLines.length] = svg
//                         .path(allout)
//                         .attr({
//                            "stroke": "white",
//                            "stroke-width": 4,
//                            "stroke-dasharray": "---"
//                     });
//                 }else{
//                     myLines[myLines.length] = svg
//                     .path(allout)
//                     .attr({
//                        "stroke": "white",
//                        "stroke-width": 5,
//                        "stroke-dasharray": "---"
//                     });
//                 }
//             }else{
//                 myLines[myLines.length] = svg
//                     .path(allout)
//                     .attr({
//                        "stroke": colorOut,
//                        "stroke-width": 5,
//                        "stroke-dasharray": "---"
//                 });             
//             }
            
            
//             source.attr('numcanvas', myLines.length);
//             // && colorIn == "white")
//             if(colorIn == "white"){
//                 if(printFlag){
//                     myLines[myLines.length] = svg
//                     .path(allin)
//                     .attr({
//                        "stroke": "black",
//                        "stroke-width": 5,
//                        "stroke-dasharray": "---"
//                     });

//                     myLines[myLines.length] = svg
//                     .path(allin)
//                     .attr({
//                        "stroke": "white",
//                        "stroke-width": 4,
//                        "stroke-dasharray": "---"
//                     });    
//                 }else{

//                     myLines[myLines.length] = svg
//                         .path(allin)
//                         .attr({
//                            "stroke": "white",
//                            "stroke-width": 5,
//                            "stroke-dasharray": "---"
//                     });
//                 }
//             }else{
//                 myLines[myLines.length] = svg
//                     .path(allin)
//                     .attr({
//                        "stroke": colorIn,
//                        "stroke-width": 5,
//                        "stroke-dasharray": "---"
//                     });
//             }
             
             
//              if(tipo_conexao == 'F'){			
//                    target.attr('numCircle',myCircles.length );
//                    source.attr('numCircle', myCircles.length);
//                   if(cod_cores_inn != 'PAC' && cod_cores_out!='PAC'){
//                        myCircles[myCircles.length] = svg.circle(circleX, circleY, 3).attr({fill: "#000000", stroke:"#000000"});     
//                   }                  
//                  if(printFlag) myCircles[myCircles.length] = svg.circle(circleX, circleY, 1.5).attr({fill: "#FFFFFF", stroke:"#FFFFFF"});
//              }

//         }, 200);
//     }
//     function random(range) {
//         return Math.floor(Math.random() * range);
//     }
//     // random colors are not that random after allin
//     var coresBR = ["null","green","yellow","white","blue","red","violet","brown","pink","black","gray","orange","aquamarine"];
//     var coresIN = ["null","blue","orange","green","brown","gray","white","red","black","yellow","violet","pink","aquamarine"];


//     $("#svgbasics").css("z-index", 1010);
    
    


