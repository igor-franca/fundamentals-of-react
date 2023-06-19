import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img  className={styles.avatar} src='https://github.com/igor-franca.png' />
                    <div className={styles.authorInfo}>
                        <strong>Diogo Fernandes</strong>
                        <span>web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio as 08:13' dateTime='2022-05-11 08:13:30'>Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉 &nbsp; <a href=''>jane.design/doctorcare</a></p>
                    <p> 
                        <a href=''>#novoprojeto</a>&nbsp; 
                        <a href=''>#nlw</a>&nbsp;
                        <a href=''>#rocketseat</a>
                    </p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentario'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}