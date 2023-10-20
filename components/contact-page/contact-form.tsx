import { Notification } from '@/components/ui/notification';
import { INotificationProps } from "@/types/component-props";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import classes from '../../styles/contact-form.module.css';


export const ContactForm: FC = memo(() => {

    const [notification, setNotification] = useState<Omit<INotificationProps, 'onClick'> | null>(null);
    const hideNotification = useCallback(() => {
        setNotification(null)
    }, [])
    useEffect(() => {
        if (notification && notification.status === 'success') {
            const timerId = setTimeout(hideNotification, 3000);
            return () => {
                clearTimeout(timerId);
            }
        }
    }, [hideNotification, notification])

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleFormSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNotification({
            title: 'Pending',
            message: 'Sending message...',
            status: 'pending'
        });
        try {
            const message = {
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                message: messageRef.current?.value
            }
            const response = await fetch('api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Message sending failed');
            }
            setNotification({
                title: 'Success',
                message: 'Message sent successfully',
                status: 'success'
            })
            nameRef.current!.value = '';
            emailRef.current!.value = '';
            messageRef.current!.value = '';
        } catch (error: any) {
            setNotification({
                title: 'Error',
                message: error.message || 'Something went wrong',
                status: 'error'
            })
        }
    }, [])

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
        {notification && <Notification
            onClick={hideNotification}
            title={notification.title}
            message={notification.message}
            status={notification.status as 'error' | 'success' | 'pending'}
        />}
    </section>
})