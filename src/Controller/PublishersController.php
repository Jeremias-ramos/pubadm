<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;

class PublishersController extends AppController
{

    /**
     * Index method
     *
     * All information will be handled in view
     *
     * @return void
     */
    public function index()
    {
       
    }

    public function initialize(){
        parent::initialize();
        $this->loadComponent('RequestHandler');
        $this->Auth->allow(['listar','listgroups']);
    }

    public function listar()
    {
        // $this->layout = 'ajax'; 
        $this->layout = false;
        $this->autoRender = false;
        // $this->request->allowMethod(['post']);
        //Return
        $json = $this->Publishers->find()->contain(['relatorio','grupos'])->order(["Publishers.id_group","Publishers.nome"])->toArray();
        // $this->response->withType('application/json');
        // $this->response->withStringBody($json);
        $response = $this->response->withType('application/json')
        ->withStringBody(json_encode($json));
        return $response;
        
    }

    public function listgroups()
    {
        // $this->layout = 'ajax'; 
        $this->layout = false;
        $this->autoRender = false;

        $grupos_table = TableRegistry::getTableLocator()->get('grupos');
        
        // $this->request->allowMethod(['post']);
        //Return
        $json = $grupos_table->find()->toArray();
        // $this->response->withType('application/json');
        // $this->response->withStringBody($json);
        $response = $this->response->withType('application/json')
        ->withStringBody(json_encode($json));
        return $response;
        
    }

    public function save()
    {
        $this->layout = false;
        $this->autoRender = false;

        $id_pub = $this->request->getData('id_pub');
        $id_rel = $this->request->getData('id_rel');
        $publicacoes = $this->request->getData('publicacoes');
        $videos = $this->request->getData('videos');
        $horas = $this->request->getData('horas');
        $revisitas = $this->request->getData('revisitas');
        $estudos = $this->request->getData('estudos');
        $privilegio = $this->request->getData('privilegio');
        $mes = $this->request->getData('mes');
        $ano = $this->request->getData('ano');

        $relatorios_table = TableRegistry::getTableLocator()->get('relatorio');

        if($id_rel !== "0"){
            $report = $relatorios_table->find()->where(['id_rel' => $id_rel])->first();
        }

        if(!$report){
            $report = $relatorios_table->newEntity();
            $report->id_pub = $id_pub;
            $report->mes = $mes;
            $report->ano = $ano;
        }

        $report->publicacoes = $publicacoes;
        $report->videos = $videos;
        $report->horas = $horas;
        $report->revisitas = $revisitas;
        $report->estudos = $estudos;
        $report->privilegio = $privilegio;
        
        if($relatorios_table->save($report, ['atomic' => false])){
            $json = "Ok";
        }else{
            $json = "Error"; 
        }
        
        
        $response = $this->response->withType('application/json')
        ->withStringBody(json_encode($json));
        return $response;
        
    }

    public function alterpublisher()
    {
        $this->layout = false;
        $this->autoRender = false;

        $id = $this->request->getData('id');
        $nome = $this->request->getData('nome');
        $email = $this->request->getData('email');
        $endereco = $this->request->getData('endereco');
        $tipo = $this->request->getData('tipo');
        $dt_nasc = $this->request->getData('dt_nasc');
        $dt_batismo = $this->request->getData('dt_batismo');
        $fone = $this->request->getData('fone');
        $desativado = $this->request->getData('desativado');

        if($id !== "0"){
            $pub = $this->Publishers->find()->where(['id' => $id])->first();
        }

        if(!$pub){
            $pub = $this->Publishers->newEntity();
        }

        $pub->nome = $nome;
        $pub->email = $email;
        $pub->endereco = $endereco;
        $pub->tipo = $tipo;
        $pub->dt_nasc = $dt_nasc;
        $pub->dt_batismo = $dt_batismo;
        $pub->fone = $fone;
        // $pub->desativado = $desativado;
        
        if($this->Publishers->save($pub, ['atomic' => false])){
            $json = "Ok";
        }else{
            $json = "Error"; 
        }
        
        
        $response = $this->response->withType('application/json')
        ->withStringBody(json_encode($json));
        return $response;
        
    }

}