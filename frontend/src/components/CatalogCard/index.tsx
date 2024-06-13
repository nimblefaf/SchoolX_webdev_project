import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ItemPlaceholderImage from '@/app/assets/images/sad_cpu.jpg'
import styles from './CatalogCard.module.scss';

export default function CatalogCard() {

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    fill
                    src={ItemPlaceholderImage}
                    alt="ItemPicture"
                />
            </div>

            <div className={styles.cardDesc}>
                <Link href="/" className={styles.cardDescName}>Название</Link>
                <span className={styles.cardDescText}>Описание</span>

                <div className={styles.cardBottom}>
                    <span className={styles.cardDescPrice}>3500 руб.</span>
                    <button className={styles.cardDescBuyBtn}>КУПИТЬ</button>
                </div>

                

            </div>
        </div>
    );
}