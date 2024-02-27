import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify'

function Favoritos() {


    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@filmesflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function excluirFilme(id){
        let filtrosFilmes = filmes.filter((item) =>{
            return (item.id !== id)  
        });

        setFilmes(filtrosFilmes); 
        localStorage.setItem("@filmesflix", JSON.stringify(filtrosFilmes));
        toast.success("Filme exlcuido com sucesso!");
    }
    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length ===0 && <span>Vc não possui filmes salvos!!</span>} 
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Exluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Favoritos;