import S from './queroDoar.module.scss'
import livro from '../../assets/Vector.png'
import { useState } from 'react';

export default function QueroDoar(){

    const[titulo, setTitulo] = useState('');
    const[categoria, setCategoria] = useState('');
    const[autor, setAutor] = useState('');
    const[linkDaImagem, setLinkDaImagem] = useState('');

    function submit(evento){ 
        evento.preventDefault()
        const DadosParaApi= {       
            "titulo": titulo,
            "categoria": categoria,
            "autor": autor,
            "imagem_url": linkDaImagem
        }
        fetch('https://desafio2-api.onrender.com/doar',{
            method:`POST`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DadosParaApi)
        })
    }

    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="" onSubmit={submit}>
                  <div>
                    <img src={livro} alt="icone de um livro" />
                    <h3>Informações do Livro</h3>
                    </div>  
                    <input value={titulo} onChange={(evento)=>setTitulo(evento.target.value)} type="text" placeholder='Titulo' />
                    <input value={categoria} onChange={(evento)=>setCategoria(evento.target.value)} type="text" placeholder='Categoria' />
                    <input value={autor} onChange={(evento)=>setAutor(evento.target.value)} type="text" placeholder='Autor' />
                    <input valuer={linkDaImagem} onChange={(evento)=>setLinkDaImagem(evento.target.value)} type="text" placeholder='Link da Imagem' />
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}