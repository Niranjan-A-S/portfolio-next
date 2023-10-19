import { FC, memo } from "react";
import { Logo } from "./logo";
import Link from "next/link";
import classes from '../../styles/main-navigation.module.css';

export const MainNavigation: FC = memo(() =>
    <header className={classes.header} >
        <Link href="/">
            <Logo />
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
)