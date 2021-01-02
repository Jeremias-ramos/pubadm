<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         0.10.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 * @var \App\View\AppView $this
 */

?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= "Controle de Serviço de Campo" ?>:
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <?= $this->Html->css('base.css') ?>
    <?= $this->Html->css('style.css') ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
    <?= $this->Html->script('files/angular'); ?>
    <?= $this->Html->script('files/foundation/vendor/jquery'); ?>

    <?= $this->Html->script("ui/jquery_ui"); ?>
    <!-- arquivos do jquery ui -->
    <?= $this->Html->css('ui/jquery-ui') ?>
    <?= $this->Html->css('ui/jquery-ui.structure') ?>
    <?= $this->Html->css('ui/jquery-ui.theme') ?>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <?= $this->Html->css('jquery.multiselect') ?>
    
    <?= $this->Html->script('files/angular-sanitize'); ?>
    <?= $this->Html->script('files/angular-environment.min'); ?>
    <?= $this->Html->script('files/angular-spinner/angular-spinner.min.js'); ?>
    <?= $this->Html->script('files/dirPagination'); ?>
    <?= $this->Html->script('files/angular-locale_pt-br'); ?>
    <?= $this->Html->script('files/ng-file-upload-shim'); ?>
    <?= $this->Html->script('files/ng-file-upload'); ?>
    <!-- Renderizar JSON no HTML -->
    <?= $this->Html->script('files/renderjson.js'); ?>
    <?= $this->Html->script('services/dialogService'); ?>
    <?= $this->Html->script('app/app'); ?>
    <!-- <?= $this->Html->script('files/controle'); ?> -->
    
    
    
    <?= $this->Html->script('services/publishersService.js?'); ?> 
    <?= $this->Html->script('controllers/publishersController.js?'); ?>

    <?= $this->fetch('meta') ?>
        <?= $this->fetch('css') ?>
        <?= $this->fetch('script') ?>

        <style type="text/css">
            [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
                display: none !important;
            }
        </style>
</head>
<body ng-app='sys_admin' ng-cloak>
    <nav class="top-bar expanded" data-topbar role="navigation">
        <ul class="title-area large-3 ">
            <li class="name">
                <h1><a href="">
                    <button ng-click="Publishers.changedDate(-1)"><?=__('<')?></button>
                    {{month}}/{{year}}
                    <button ng-click="Publishers.changedDate(+1)"><?=__('>')?></button>
                </a></h1>
            </li>
        </ul>
        <div class="top-bar-section">
            <ul class="left">
                <li><a>Congregação Santa Cruz do Timbó / Grupo Irineópolis</a></li>
            </ul>
            <ul class="left">
                <li><button class='button button-2 ' ng-click="Publishers.showPublisher()"><?=__('Novo Publicador')?></button></li>
                <li><button ng-class="{'button button-2 alert': Publishers.changed, 'button button-2' : !Publishers.changed}" ng-click="Publishers.save()"><?=__('Salvar')?></button></li>
            </ul>
        </div>
    </nav>
    <?= $this->Flash->render() ?>
    <div class="container clearfix">
        <?= $this->fetch('content') ?>
    </div>
    <footer>
    </footer>
</body>
</html>
