import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim () {
    return (
        <main>
            <PostModelo 
                fotoCapa={fotoCapa} 
                titulo="Sobre Mim"
            >
                <h3 className={styles.subtitulo}>Olá, eu sou a Isabelle!</h3>
                <img 
                    className={styles.fotoSobreMim}
                    src={fotoSobreMim}
                    alt="Foto de Isabelle Furui"
                >
                </img>
                
                <p className={styles.paragrafo}>
                    Meu nome é Isabelle Furui, tenho 20 anos e atuo como Desenvolvedora Júnior e professora de inglês particular há 2 anos. Tenho paixão por tecnologia e educação, e busco constantemente aprimorar minhas habilidades nas duas áreas.
                </p>
                <p className={styles.paragrafo}>
                    Na área de desenvolvimento, possuo conhecimentos em linguagens back-end como HTML, CSS, JavaScript, PHP e TypeScript, além de experiência com frameworks como React, Node.js. Trabalho também com bancos de dados como SQL Server e utilizo no meu dia a dia ferramentas como Jira, Vercel, Git e GitHub para gerenciamento de projetos, versionamento de código e deploy de aplicações.
                </p>
                <p className={styles.paragrafo}>
                    Sou uma pessoa curiosa, dedicada e com muita vontade de aprender e crescer profissionalmente, tanto no desenvolvimento de software quanto em aprender.
                </p>
            </PostModelo>
        </main>
    )
}