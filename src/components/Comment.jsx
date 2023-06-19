import React from "react"
import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react"
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/igor-franca.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='11 de Maio as 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabens!!</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}