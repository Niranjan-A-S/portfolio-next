import { FC, memo, useRef } from "react";
import classes from '../../styles/contact-form.module.css';
import { IContactFormProps } from "@/types/component-props";

export const ContactForm: FC<IContactFormProps> = memo(({ onSubmit }) => {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value
        })
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={handleFormSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required ref={emailRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" required ref={nameRef} />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={5} required ref={messageRef} />
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
})