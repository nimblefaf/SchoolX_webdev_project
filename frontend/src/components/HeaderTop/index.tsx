import styles from './HeaderTop.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import menuShape from '@/app/assets/images/menuButton.svg'
import profileShape from '@/app/assets/images/profile.svg'


export default function HeaderTop() {
    return (
            <div className={styles.wrapper}>
                <Link href="/" className={styles.menu}>
                    <Image src={menuShape} alt="menu" />
                </Link>
                <nav className={styles.nav}>
                    <div className={styles.navList}>
                        <div className={styles.navListItem}>
                            <Link href="#">Акции</Link>
                        </div>
                        <div className={styles.navListItem}>
                            <Link href="/#">Кредит</Link>
                        </div>
                        <div className={styles.navListItem}>
                            <Link href="#">Оплата и доставка</Link>
                        </div>
                        <div className={styles.navListItem}>
                            <Link href="#">Помощь</Link>
                        </div>
                        <div className={styles.navListItem}>
                            <Link href="#">Скупка Б/У</Link>
                        </div>
                        <div className={styles.navListItem}>
                            <Link href="#">Контакты</Link>
                        </div>
                    </div>
                </nav>
                <Link href="#" className={styles.language}>
                    <span>EN/RU</span>
                </Link>
                <Link href="/profile" className={styles.profile}>
                    <Image src={profileShape} alt="menu" />
                </Link>
            </div>
    )}