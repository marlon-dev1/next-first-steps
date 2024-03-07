'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ActiveLinkProps } from '.';
import style from './ActiveLink.module.css';

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
    const pathName = usePathname();

    return (
        <Link
            className={`${style.link} ${pathName === path ? style['active-link'] : ''}`}
            href={path}>
            {text}
        </Link>
    );
};
