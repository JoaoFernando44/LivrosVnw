import S from './doados.module.scss'
import livro from '../../assets/livro.png'
import { useEffect, useState } from 'react';


export default function Doados(){

      const [livros, setLivros] = useState([]);
    
      useEffect(() => {
        fetch('https://desafio2-api.onrender.com/livros')
          .then(response => response.json())
          .then(data => setLivros(data))
          .catch(error => console.error('Erro ao buscar livros:', error));
      }, []);
    
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxcard}>
                {livros.map((livro, index) => (
                    <article key={index}>
                        <img src={livro.imagem_url} alt="imagem de um livro" />
                    
                        <h3>{livro.titulo}</h3>
                        <p>{livro.autor}</p>
                        <p>{livro.categoria}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}