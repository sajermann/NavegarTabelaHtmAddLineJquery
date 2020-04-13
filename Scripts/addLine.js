var id = 1;
var linha = 0;
// var index = 14;

function verificarSePodeIncluirLinha(){
    var primeiraLinha = true; // False não avança, true avança

    if(linha == 0){
        for(var i = 0; i < $(`[linha="${linha}"] [obrigatorio="true"]`).length; i++){
            if($(`[linha="${linha}"] [obrigatorio="true"]:eq(${i})`).text() == ""){
                alert($(`[obrigatorio="true"]:eq(${i})`).attr('tabindex') + " Está em branco");
                primeiraLinha = false;
            }
        }
    }
    
    if(primeiraLinha == true){
        // for(var i = 0; i < $(`[linha="${linha}"] [obrigatorio="true"]`).length; i++){
        //     if($(`[linha="${linha}"] [obrigatorio="true"]:eq(${i})`).text() == ""){

        //     }

        // }

        if($(`[linha="${linha}"] [obrigatorio="true"]`).text() == ""){
            c = currCell.closest('tr').prev().find('td:eq(' + 
            currCell.index() + ')');
            if (c.length > 0) {
            currCell = c;
            currCell.focus();
            }
            removeLine();
        }else{
            addLine();
        }
    }
}

function addLine(){
    linha += 1;
$('.lancamentosItens tbody').append(`
	<tr linha="${linha}">
		<td tabindex="1" class=" linha="${linha}" locked="true" >${id}</td>
		<td tabindex="2" class=" linha="${linha}" locked="false" obrigatorio="true" ></td>
		<td tabindex="3" class=" linha="${linha}" locked="false" ></td>
		<td tabindex="4" class=" linha="${linha}" locked="true"  ></td>
		<td tabindex="5" class=" linha="${linha}" locked="false" obrigatorio="true" ></td>
		<td tabindex="6" class=" linha="${linha}" locked="false" ></td>
		<td tabindex="7" class=" linha="${linha}" locked="true" ></td>
  </tr>
  `)
  id+= 1;

//   index += 16;
}

function removeLine(){
    $(`[linha = "${linha}"]`).remove();
    linha -= 1;
    id -= 1;
}