'use client'; // Indique que ce composant est un composant client

import Link from 'next/link';
import styles from './Header.module.css'; // Chemin vers le fichier CSS
import Image from 'next/image'; // Importer le composant Image de Next.js
import { useState } from 'react'; // Importer useState pour gérer l'état

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverser l'état du menu
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Logo et Titre à gauche, masqués lorsque le menu est ouvert */}
                {!isMenuOpen && (
                    <div className={styles.logoTitle}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.png" alt="Logo" width={50} height={50} /> {/* Ajuster la taille du logo ici */}
                        </Link>
                        <h1 className={styles.title}>LatAmBetHub</h1> {/* Titre du site */}
                    </div>
                )}

                {/* Bouton Hamburger ou Croix */}
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'} {/* Afficher croix si le menu est ouvert, sinon afficher hamburger */}
                </button>

                {/* Liens du menu visible uniquement sur desktop */}
                <ul className={styles['nav-links']}>
                    <li>
                        <Link href="/casino">Casino</Link>
                    </li>
                    <li>
                        <Link href="/betting">Betting</Link>
                    </li>
                    <li>
                        <Link href="/bingo">Bingo</Link>
                    </li>
                    <li>
                        <Link href="/broker">Broker</Link>
                    </li>
                    <li>
                        <Link href="/referral">Referral</Link>
                    </li>
                    <li>
                        <Link href="/poker">Poker</Link>
                    </li>
                    <li>
                        <Link href="/payments">Payments</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link> {/* Remplace Blog, FAQ, Contact par About */}
                    </li>
                </ul>
            </nav>

            {/* Liens du menu pour mobile, affichés sous le bouton hamburger */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li>
                            <Link href="/casino">Casino</Link>
                        </li>
                        <li>
                            <Link href="/betting">Betting</Link>
                        </li>
                        <li>
                            <Link href="/bingo">Bingo</Link>
                        </li>
                        <li>
                            <Link href="/broker">Broker</Link>
                        </li>
                        <li>
                            <Link href="/referral">Referral</Link>
                        </li>
                        <li>
                            <Link href="/poker">Poker</Link>
                        </li>
                        <li>
                            <Link href="/payments">Payments</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link> {/* Remplace Blog, FAQ, Contact par About */}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}