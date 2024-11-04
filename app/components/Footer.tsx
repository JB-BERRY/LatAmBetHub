// app/components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css'; // Fichier CSS pour le footer

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} LatAmBetHub. Tous droits réservés.</p>
                <ul className={styles.links}>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">À propos</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/privacy">Politique de confidentialité</Link></li>
                </ul>
            </div>
        </footer>
    );
}