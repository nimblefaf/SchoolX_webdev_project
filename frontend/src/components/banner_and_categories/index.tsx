'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './banner_and_categories.module.scss'

import Banner from '../banner'


import Processor from '@/app/assets/images/CategoriesIcons/Processor.svg'
import Monitor from '@/app/assets/images/CategoriesIcons/Monitor.svg'
import Computer from '@/app/assets/images/CategoriesIcons/Computer.svg'
import Laptop from '@/app/assets/images/CategoriesIcons/Laptop.svg'
import Console from '@/app/assets/images/CategoriesIcons/Console.svg'
import LaptopComponent from '@/app/assets/images/CategoriesIcons/Laptop component.svg'
import Tablet from '@/app/assets/images/CategoriesIcons/Tablet.svg'
import Printer from '@/app/assets/images/CategoriesIcons/Printer.svg'
import Speakers from '@/app/assets/images/CategoriesIcons/Speakers.svg'
import WebStuff from '@/app/assets/images/CategoriesIcons/Web staff.svg'

import ArrowRight from '@/app/assets/images/CategoriesIcons/ArrowRight.svg'

import Achievment from '@/app/assets/images/HomePage/Achievement.svg'
import Delivery from '@/app/assets/images/HomePage/Delivery.svg'
import Guarantee from '@/app/assets/images/HomePage/Guarantee.svg'
import Installation from '@/app/assets/images/HomePage/Installation.svg'
import Manager from '@/app/assets/images/HomePage/Manager.svg'
import Payments from '@/app/assets/images/HomePage/Payments.svg'
import Price from '@/app/assets/images/HomePage/Price.svg'

export default function Banner_and_categories() {

    return (
        <div className="container">
            <div className={styles.banner_and_categories}>
                <div className={styles.categories}>
                    <Link href="/" className={styles.category}>
                        <Image src={Processor} alt='icon'></Image>
                        <span>Комплектующие ПК</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                            <Image src={Monitor} alt='icon'></Image>
                            <span>Мониторы</span>
                            <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={Computer} alt='icon'></Image>
                        <span>Компьютеры</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={Laptop} alt='icon'></Image>
                        <span>Ноутбуки</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={Console} alt='icon'></Image>
                        <span>Игровые консоли</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={LaptopComponent} alt='icon'></Image>
                        <span>Комплектующие к ноутбукам</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={Tablet} alt='icon'></Image>
                        <span>Планшеты</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={Printer} alt='icon'></Image>
                        <span>Принтеры и МФУ</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={Speakers} alt='icon'></Image>
                        <span>Акустические колонки</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                    <Link href="/" className={styles.category}>
                        <Image src={WebStuff} alt='icon'></Image>
                        <span>Сетевое оборудование</span>
                        <Image className={styles.categoryArrow} src={ArrowRight} alt='button'></Image>
                    </Link>
                </div>
                <div className={styles.right_side}>
                    <Banner></Banner>
                    <div className={styles.services}>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Installation} alt='installation'></Image>
                            <span>Бесплатная</span>
                            <span>сборка</span>
                        </div>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Payments} alt='payments'></Image>
                            <span>Рассрочка 4 мес./0%</span>
                            <span>без переплат</span>
                        </div>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Delivery} alt='delivery'></Image>
                            <span>Бесплатная</span>
                            <span>доставка</span>  
                        </div>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Guarantee} alt='guarantee'></Image>
                            <span>Официальная</span>
                            <span>гарантия</span>
                        </div>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Price} alt='price'></Image>
                            <span>Лучшая цена</span>
                        </div>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Achievment} alt='achievment'></Image>
                            <span>11 лет</span>
                            <span>на рынке</span>
                        </div>
                        <div className={styles.service_card}>
                            <Image className={styles.serive_image} src={Manager} alt='manager'></Image>
                            <span>Профессиональная</span>
                            <span>консультация</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}