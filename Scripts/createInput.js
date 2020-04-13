var valorTempCell = ""

function createInput(tecla){
	editing = true;
	var valorCelula = currCell.html();
	var linha = currCell.attr('linha');
	valorTempCell = currCell.html();
	currCell.html('')
	
	tipoCelula = 'text';
	hiddenOrNoHidden = 'hidden';
	classe = 'inputDescricao';
	currCell.append(`
	<div class="input-group mb-3">
		<input type="${tipoCelula}" id="inputEntradaDados" linha="${linha}" value="${valorCelula}" class="form-control ${classe}" aria-label="Recipient's username" aria-describedby="basic-addon2" autofocus>
	</div>
	`); 
	if(tecla==null){$('#inputEntradaDados').select();}else{$('#inputEntradaDados').focus().val('');}
}

$('body').on('keydown', '.input-group', function(e){
        
        switch(e.which){
            case 9: //Tecla Tab
            case 13: //Tecla Enter
                e.preventDefault();
                currCell.html($('#inputEntradaDados').val())
                $('#inputEntradaDados').remove();
                editing = false;
                currCell.focus();
                break;
            case 27: //Tecla Escape
                e.preventDefault();
                $('.input-group').remove();
                currCell.html(valorTempCell);
                editing = false;
                currCell.focus();
                valorTempCell = "";
                break;
            case 114: //Tecla F3
            e.preventDefault();
            break;
		}
		
});

