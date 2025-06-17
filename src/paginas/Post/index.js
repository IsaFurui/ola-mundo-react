import { useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from 'react-markdown';
import './Post.css';
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";
import styles from './Post.module.css';

export default function Post () {
    const params = useParams(); // Hook do React Router Dom

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    /*
    - Filter: para filtrar todos os posts onde o id não seja igual ao id do path
    - Sort: fazer o sorteio dos posts que sobraram
    - Slice: pegar apenas 4 posts
    */

    const postsRecomendados = posts.filter((post) => post.id !== Number(params.id)).sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
            
            <h2 className={styles.tituloOutrosPosts}>Outros posts que você possa gostar: </h2>
            <div className={styles.containerOutrosPosts}>
                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>
            </div>
        </PaginaPadrao>
    )
}