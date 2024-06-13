'use client';

import Image from 'next/image';
import styles from './banner.module.scss'

import banner_picture from '@/app/assets/images/banner_placeholder.png'



export default function Banner() {

    return (
        <div className={styles.banner}>
            <Image className={styles.image} src={banner_picture} alt='banner'></Image>
        </div>
    );
}