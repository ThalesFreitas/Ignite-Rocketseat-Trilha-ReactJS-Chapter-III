import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
    const isUserLoggedIn = true;
    
    //se o usuario estiver logado(isUserLoggedIn=true) ele muda a cor do icone para verde
    // e coloca o nome do usuario, caso não esteja logado muda a cor para amarelo
    return isUserLoggedIn ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#04d361" />
           Thales Freitas
           <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ): (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}

