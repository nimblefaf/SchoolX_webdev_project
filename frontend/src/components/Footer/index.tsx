'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';
import { text } from 'stream/consumers';

import instagram from '@/app/assets/images/Instagram.svg'
import facebook from '@/app/assets/images/Facebook.svg'
import viber from '@/app/assets/images/Viber.svg'
import telegram from '@/app/assets/images/Telegram.svg'
import youtube from '@/app/assets/images/YouTube.svg'
import linkedin from '@/app/assets/images/LinkedIn.svg'

import logoWhite from '@/app/assets/images/logo_white.svg'
import visa from '@/app/assets/images/visa.svg'
import mastercard from '@/app/assets/images/mastercard.svg'
import { link } from 'fs';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.linksRow}>
                    <div className={styles.linksColumn}>
                        <h6>Информация</h6>
                        
                        <Link href="#" className={styles.link}>Акции</Link>
                        <Link href="#" className={styles.link}>Кредит</Link>
                        <Link href="#" className={styles.link}>Оплата и доставка</Link>
                        <Link href="#" className={styles.link}>Гарантия</Link>
                        <Link href="#" className={styles.link}>Частые вопросы</Link>
                        <Link href="#" className={styles.link}>Новости</Link>
                        <Link href="#" className={styles.link}>Блог</Link>
                        <Link href="about" className={styles.link}>О нас</Link>
                        <Link href="#" className={styles.link}>Политика конфиденциальности</Link>
                        <Link href="#" className={styles.link}>Контакты</Link>
                    </div>
                    <div className={styles.linksColumn}>
                        <h6>Услуги и сервисы</h6>
                        <Link href="#" className={styles.link}>Сервисный центр v-comp</Link>
                        <Link href="#" className={styles.link}>Магазин Б/У товара</Link>
                        <Link href="#" className={styles.link}>Скупка Б/У </Link>
                        <Link href="#" className={styles.link}>Ремонт ПК и оргтехники</Link>
                        <Link href="#" className={styles.link}>Компьютерная помощь</Link>
                        <Link href="#" className={styles.link}>Сотрудничество</Link>
                        <Link href="#" className={styles.link}>Главная</Link>
                    </div>
                    <div className={styles.linksColumn}>
                        <h6>Контакты</h6>
                        <text>(000) 00-00-000 - Отдел продаж</text>
                        <text>(123) 456-78-90 - Отдел продаж</text>
                        <text>(123) 456-78-90 - Отдел продаж</text>
                        <text>Ростов-на-Дону, ул. Шаповалова, 2а </text>
                        <text className={styles.contactsTextField}>Понедельник-Пятница 9:00-19:00 Суббота-Воскресенье: с 9:00-16:00</text>
                    </div>
                    <div className={styles.followAndSubscribe}>
                        <div>
                            <h6>Следите за нами</h6>
                            <div className={styles.socials}>
                                <Link href="/" className={styles.link}>
                                    <Image src={instagram} alt='instagram'></Image>
                                </Link>
                                <Link href="/" className={styles.link}>
                                    <Image src={facebook} alt='facebook'></Image>
                                </Link>
                                <Link href="/" className={styles.link}>
                                    <Image src={viber} alt='viber'></Image>
                                </Link>
                                <Link href="/" className={styles.link}>
                                    <Image src={telegram} alt='telegram'></Image>
                                </Link>
                                <Link href="/" className={styles.link}>
                                    <Image src={youtube} alt='youtube'></Image>
                                </Link>
                                <Link href="/" className={styles.link}>
                                    <Image src={linkedin} alt='linkedin'></Image>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h6>Подписывайтесь за скидки</h6>
                            <div className={styles.email_input}> 
                                <input placeholder='Укажите ваш email...'></input>
                                <Link href="/" className={styles.link}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
                                    <path stroke="#01579B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m23 1.504-12 12m12-12-7.7 22-4.4-9.9-9.9-4.4 22-7.7Z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <hr></hr>
                    <div className={styles.copyrightColumns}>
                        <Image src={logoWhite} alt='logo'></Image>
                        <text className={styles.text}>2024 Интернет магазин v-comp.shop Все права защищены.</text>
                        <Image className={styles.mastercard} src={mastercard} alt='mastercard'></Image>
                        <Image src={visa} alt='visa'></Image>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </footer>
    );
}