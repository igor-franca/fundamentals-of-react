import { Post } from "./components/Post"
import { Header } from "./components/Header"

import './global.css';
import styles from './app.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Qualquer"
          />
          <Post
            author="Diego Fernandes"
            content="Qualquer"
          />
        </main>
      </div>
    
    </>
    
  )
}

export default App
