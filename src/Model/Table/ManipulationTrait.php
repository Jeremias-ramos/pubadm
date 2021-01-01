<?php
namespace App\Model\Table;

use Cake\Datasource\EntityInterface;
use Cake\ORM\TableRegistry;

/**
 * Trait Manipulation
 *
 * Generate logs
 */
trait ManipulationTrait
{

    /**
     * Create method
     *
     * @param EntityInterface $entity
     * @param array $options
     * @return bool
     */
    public function create(EntityInterface $entity, $options = [])
    {
        $success = parent::save($entity, $options);
        if ($success) {
        }
        return $success;
    }

    /**
     * Edit method
     *
     * @param EntityInterface $entity
     * @param array $options
     * @return bool
     */
    public function edit(EntityInterface $entity, $options = [])
    {
        $success = parent::save($entity, $options);
        if ($success) {
        }
        return $success;
    }

    /**
     * Delete method
     *
     * @param EntityInterface $entity
     * @param array $options
     * @return bool
     */
    public function delete(EntityInterface $entity, $options = [])
    {
        $success = parent::delete($entity, $options);
        if ($success) {
            
        }
        return $success;
    }
}
