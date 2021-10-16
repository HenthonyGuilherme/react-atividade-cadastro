import React from 'react'
import './Cadastro.css'

function Cadastro(){

    function validar(e){
        if(document.getElementById('nome').value == ''){
            e.preventDefault();
            alert(' Por favor verifique se todos os dados foram preenchidos.');
            document.getElementById('nome').focus();
        }
        else if(document.getElementById('sobrenome').value == ''){
            e.preventDefault();
            alert(' Por favor verifique se todos os dados foram preenchidos.');
            document.getElementById('sobrenome').focus();
        }
        else if(document.getElementById('Senha').value == ''){
            e.preventDefault();
            alert(' Por favor verifique se todos os dados foram preenchidos.');
            document.getElementById('Senha').focus();
        }
        else if(document.getElementById('email').value == ''){
            e.preventDefault();
            alert(' Por favor, verifique se todos os dados foram preenchidos.');
            document.getElementById('email').focus();
        }
        else{
            alert(' Sua mensagem foi enviada ao Restaurante Start!');
        }
    }


    return(
    <>
        <form className='cadrastro' autocomplete="off" onSubmit={validar}>
            <h3>Cadastro</h3>
            <h4>Preencha os dados abaixo para começar.</h4>
            <fieldset>
                <input id="nome" placeholder="Nome" type="text" autofocus />
            </fieldset>
            <fieldset>
                <input id="sobrenome" placeholder="Sobrenome" type="text" />
            </fieldset>
            <fieldset>
                <input id="email" placeholder="E-mail" type="email" />
            </fieldset>
            <fieldset>
                <input id="senha" placeholder="Senha" type="password" />
            </fieldset>
            <fieldset>
                <button nome= "submit" type="submit">Concluir cadastro</button>
            </fieldset>
        </form>
    </>
    );
}

export default Cadastro
