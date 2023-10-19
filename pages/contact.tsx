import { FC, memo, useCallback } from "react";
import { ContactForm } from "@/components/contact-page/contact-form";
import { IContactParams } from "@/types/component-props";

const ContactPage: FC = () => {

    const sendMessage = useCallback(async (data: IContactParams) => {
        await fetch('api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [])

    return <ContactForm onSubmit={sendMessage} />
}

export default memo(ContactPage);