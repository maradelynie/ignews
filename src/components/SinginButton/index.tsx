import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, signOut, useSession } from 'next-auth/client'

export function SinginButton() {
    const [session] = useSession();

    return session ? (
        <button type="button" onClick={() => signOut()} className={styles.singInButton}>
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" onClick={() => signIn('github')} className={styles.singInButton}>
            <FaGithub color="#eba417" /> Sing in with Github
        </button>
    )
}