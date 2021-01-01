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
class PublishersTable extends Table
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
        $this->gettable('publishers');
        $this->getdisplayField('id');
        $this->getprimaryKey('id');
        $this->hasMany('relatorio', [
            'foreignKey' => 'id_pub',
        	'dependent' => true,
        	'cascadeCallbacks' => true
        ]);
        $this->hasOne('grupos', [
            'foreignKey' => 'id_group',
            'dependent' => true
        ]);
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
    	
    	return $validator;
    }

    
}
