<?php
namespace App\Controller;

use Cake\ORM\TableRegistry;

class UsersController extends AppController
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

    public function login(){
    	
    	if ($this->request->is('post')) {
            $user = $this->Auth->identify();
            if ($user) {
                $this->Auth->setUser($user);

                return $this->redirect(['controller' => 'Publishers', 'action' => 'index']);
            }
            $this->Flash->error(__('Email ou senha incorretos'));
    	}
    	//Get ident to present in screen
    	// $session = $this->request->session();
    	// $control = $session->read(TomodatConstants::$TOMODAT_SESSION_IDENTIFIER);
    	// $this->set(compact('control'));
    	// $this->set('_serialize', ['control']);
    }
}