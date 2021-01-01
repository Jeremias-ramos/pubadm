<div class="row ">

	<br>
	<br>

	<div class="small-12 medium-4 medium-offset-4 columns">
		
		<h4 class='text-center'>Login</h4>
		<?= $this->Form->create() ?>
		<?= $this->Form->input('email',['required']) ?>
		<?= $this->Form->input('password',['required','label'=>__('Senha'),'autocomplete'=>'off']) ?>
		<?= $this->Form->button('Login',['class'=>['button','small-12']]) ?>
		<?= $this->Form->end() ?>
	
	</div>


</div>
 
