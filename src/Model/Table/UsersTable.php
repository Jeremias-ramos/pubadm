<?php
namespace App\Model\Table;

use Cake\ORM\Entity;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\Auth\DefaultPasswordHasher;
use Cake\ORM\TableRegistry;

/**
 * Users Model
 *
 */
class UsersTable extends Table
{

    use ManipulationTrait;

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        $this->gettable('users');
        $this->getdisplayField('id');
        $this->getprimaryKey('id');
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->add('id', 'valid', ['rule' => 'numeric'])
            ->allowEmptyString('id','create');

        $validator
            ->add('email', 'valid', ['rule' => 'email']);

        $validator
            ->add('password_repeat', [
                'comparePasswords' => ['rule' => ['compareWith', 'password'],  'message' => __('Senha e Confirmação da senha não conferem')],
            ]);

        $message_required = __('Você precisa preencher este campo');
        $validator
            ->requirePresence('password', 'create', $message_required)
            ->requirePresence('password_repeat', 'create', $message_required)
            ->requirePresence('email', 'create', $message_required)
            ->requirePresence('level', 'create', $message_required)
            ->requirePresence('active', 'create', $message_required);

        $validator
            ->notEmptyString('email', $message_required)
            ->notEmptyString('password', $message_required)
            ->notEmptyString('password_repeat', $message_required)
            ->notEmptyString('first_name', $message_required)
            ->notEmptyString('last_name', $message_required);

        return $validator;
    }

    /**
     * Profile change validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationProfile(Validator $validator)
    {
    	$message_required = __('Você precisa preencher este campo');
    	//Empty fields
    	$validator
            ->notEmptyString('first_name', $message_required)
            ->notEmptyString('last_name', $message_required)
            ->notEmptyString('password', $message_required)
            ->notEmptyString('old_password', $message_required)
            ->notEmptyString('password_repeat', $message_required);

    	//Password checker
    	$validator
            ->add('old_password', [
                'checkOldPassword' => ['rule' => 'checkOldPassword', 'provider' => 'table']
            ]);

    	$validator
            ->add('password_confirm', [
                'comparePasswords' => ['rule' => ['compareWith', 'password'],  'message' => __('Nova senha e Confirmação da nova senha não conferem')],
            ]);

    	return $validator;
    }

    /**
     * checkOldPassword method
     *
     * Checks user old password correctness
     *
     * @param array $data
     * @param array $provider
     * @return \Cake\Validation\Validator
     */
    public function checkOldPassword($data, $provider)
    {
    	$checker = new DefaultPasswordHasher();
    	//User info
    	$user = $this->get($provider['data']['id']);
    	$password = $data;
    	$hash = $user->password;
    	//Check hash
    	if ($checker->check($password, $hash)) {
            return true;
    	}
    	return __('Sua senha antiga não confere');
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->isUnique(['email'], __('Email já utilizado')));
        $rules->add($rules->existsIn(['company_id'], 'Companies'));
        return $rules;
    }
}
