<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Event\Event;

/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @link https://book.cakephp.org/3/en/controllers.html#the-app-controller
 */
class AppController extends Controller
{

    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading components.
     *
     * e.g. `$this->loadComponent('Security');`
     *
     * @return void
     */
    public function initialize()
    {
        parent::initialize();
        $this->layout = 'default';
        $this->loadComponent('RequestHandler');
        $this->loadComponent('Flash');
        $this->loadComponent('Auth', [
        	'authorize' => ['Controller'],
            'authenticate' => [
                'Form' => [
                    'fields' => [
                        'username' => 'email',
                        'password' => 'password'
                    ],
                ]
            ],    
        ]);

        /*
         * Enable the following component for recommended CakePHP security settings.
         * see https://book.cakephp.org/3/en/controllers/components/security.html
         */
        //$this->loadComponent('Security');
    }

    /**
     * isAuthorized method
     *
     * @param \App\Model\Entity\User $user
     * @return boolean
     */
    public function isAuthorized($user)
    {
    	// Get controller and action to verify authorization
    	$controller = $this->request->getParam('controller');
    	$action = $this->request->getParam('action');
    	//If its anything related to the Painel logs, or the cost report, user has to be level 3.
    	if (($controller == 'Painel') || ($action == 'cost_report')){
    		if ($this->Auth->user()['level'] > 2){
    			return true;
    		} else {
    			return false;
    		}
    	}
    	//If action is one that alters the database, level has to be higher than 1.
    	else if (($action == 'add') || ($action == 'edit') || ($action == 'add_on_cable') || ($action == 'delete')){
    		if ($this->Auth->user()['level'] > 1){
    			return true;
    		} else {
    			return false;
    		}
    	}
    	//If it's a simple viewing action, any logged in user can use it.	
    	else if (!is_null($this->Auth->user())) {
            return true;
    	}
        return false;
    }

    function beforeFilter(Event $event) {
        parent::beforeFilter($event);
        $this->Auth->allow(['register','confirm','login','listar','listgroups']);
    }
}
