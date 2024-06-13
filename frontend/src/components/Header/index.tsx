'use client';

import Image from 'next/image';
import Link from 'next/link';
import shopLogo from '@/app/assets/images/logo.svg'
import catalogShape from '@/app/assets/images/catalog.svg'
import searchShape from '@/app/assets/images/search.svg'

import verticalLine from '@/app/assets/images/HeaderLine.svg'

import copmareShape from '@/app/assets/images/compare.svg'
import favShape from '@/app/assets/images/fav.svg'
import cartShape from '@/app/assets/images/cart.svg'


import HeaderTop from '../HeaderTop';
import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <HeaderTop/>
                <div className={styles.headerBottom}>
                    <Link href="/" className={styles.logo}>
                        <Image fill src={shopLogo} alt="shopLogo" />
                    </Link>

                    <button className={styles.catalogButton}>
                        КАТАЛОГ ТОВАРОВ
                        <Image src={catalogShape} alt="catalog" />
                    </button>

                    <div className={styles.search_bar}>
                        <input type="text" placeholder="Поиск" className={styles.search_barInput}/>
                        <button className={styles.search_button}>
                            <Image src={searchShape} alt="search" />
                        </button>
                    </div>


                    <a href="tel:+050 065 87 96" className={styles.phone}>
                        +050 065 87 96
                    </a>
                    <Image src={verticalLine} alt='|'></Image>
                    <div className={styles.cart}>
                        <div className={styles.cartIcon}>
                            <div className={styles.cartWrapImage}>
                                <Image fill src={copmareShape} alt="compare" />
                            </div>
                            <div className={styles.cartIconAltBadge}>0</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.cartIcon}>
                            <div className={styles.cartWrapImage}>
                                <Image fill src={favShape} alt="favourites" />
                            </div>
                            <div className={styles.cartIconAltBadge}>0</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.cartIcon}>
                            <div className={styles.cartWrapImage}>
                                <Image fill src={cartShape} alt="cart" />
                            </div>
                            <div className={styles.cartIconBadge}>0</div>
                        </div>
                    </div>
                </div>
                

            </div>
        </header>
    );
}

export default Header;