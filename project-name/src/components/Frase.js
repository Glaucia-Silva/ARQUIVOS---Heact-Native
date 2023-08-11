import styles from './Frase.module.css'

function Frase() {
    return (
        <div classeName={styles.fraseContainer}>
            <p classeName={styles.fraseContent}>Este é meu componente com frase!</p>
        </div>
    )
}

export default Frase
