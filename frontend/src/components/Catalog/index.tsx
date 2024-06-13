'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';
import { useCategoriesQuery } from '@/app/hooks/useCategoriesQuery';

export default function Catalog() {
    const [state, setState] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    
    const { data, isLoading, isSuccess } = useCategoriesQuery();
    console.log(data)

    return (
        <div className="container">
            <section className={styles.catalog}>
                <h2>Топ продаж</h2>

                <div className={styles.catalogGrid}>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </section>
        </div>
    );
}