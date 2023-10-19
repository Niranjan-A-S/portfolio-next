import { FC, memo } from "react";
import Image from "next/image";
import classes from '../../styles/hero.module.css';

export const Hero: FC = memo(() =>
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image
                src="/images/site/niranjan.jpg"
                alt="An image of Niranjan"
                width={300}
                height={300} />
        </div>
        <h1>Hi, I'm Niranjan</h1>
        <p>I am a software developer passionate about building web applications</p>
    </section>
)

//TODO: Change the description