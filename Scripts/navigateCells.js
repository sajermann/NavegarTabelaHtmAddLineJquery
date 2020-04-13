var currCell = $('td').first();
currCell.focus();
var editing = false;

// User clicks on a cell
$('table').on('click', 'td', function() {
    currCell = $(this);
});

//######################################################################################################
//###################################### | NAVEGAR PELO TECLADO | ######################################
//######################################################################################################
$('table').keydown(function (e) {
    var c = "";
    if(!editing){
        switch (e.which ) {
            case 97: //Tecla Num1
                if(currCell.attr('locked') == 'false'){
                    createInput(1);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break;
            case 98: //Tecla Num2
                if(currCell.attr('locked') == 'false'){
                   createInput(2);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break;
            case 99: //Tecla Num3
                if(currCell.attr('locked') == 'false'){
                   createInput(3);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break;   
            case 100: //Tecla Num4
                if(currCell.attr('locked') == 'false'){
                   createInput(4);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 101: //Tecla Num5
                if(currCell.attr('locked') == 'false'){
                   createInput(5);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 102: //Tecla Num6
                if(currCell.attr('locked') == 'false'){
                   createInput(6);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 103: //Tecla Num7
                if(currCell.attr('locked') == 'false'){
                   createInput(7);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 104: //Tecla Num8
                if(currCell.attr('locked') == 'false'){
                   createInput(8);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 105: //Tecla Num9
                if(currCell.attr('locked') == 'false'){
                   createInput(9);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 96: //Tecla Num0
                if(currCell.attr('locked') == 'false'){
                   createInput(0);
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break;             
            case 37: //Tecla Esquerda
                c = currCell.prev();
            break; 
            case 38: //Tecla Cima
                c = currCell.closest('tr').prev().find(`td:eq('${currCell.index()}')`);
            break; 
            case 39: //Tecla Direita
                c = currCell.next()
            break;
            case 40: //Tecla Baixo
            c = currCell.closest('tr').next().find('td:eq(' + currCell.index() + ')');
            if (c.length <= 0) {
                verificarSePodeIncluirLinha();
                c = currCell.closest('tr').next().find('td:eq(' + currCell.index() + ')');
            }
            break;
            case 46: //Tecla Delete
               if(currCell.attr('locked') == 'false'){
                currCell.html('')
               }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break; 
            case 13: //Tecla Enter
            case 32: //Tecla Espaço
                if(currCell.attr('locked') == 'false'){
                    e.preventDefault();
                    createInput();
                }else{M.toast({html: 'Célula bloqueada para edição, leia a documentação!'})}
            break;
        }
        if(e.which == 9 && !e.shiftKey){ //Tecla Tab e Shift
             e.preventDefault();
             c = currCell.next();
        }
        else if(e.which == 9 && e.shiftKey){ //Tecla Tab e Shift
             e.preventDefault();
             c = currCell.prev();
        }
    }
    
    if (c.length > 0) {
        currCell = c;
        currCell.focus();
    }
});