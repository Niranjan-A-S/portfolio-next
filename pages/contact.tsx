import { FC, memo } from "react";
import { ContactForm } from "@/components/contact-page/contact-form";
import Head from 'next/head'

const ContactPage: FC = () => <>
    <Head>
        <title>Contact Me</title>
        <meta
            name="description"
            content="Send me a message if you have any questions"
        />
    </Head>
    <ContactForm />
</>

export default memo(ContactPage);