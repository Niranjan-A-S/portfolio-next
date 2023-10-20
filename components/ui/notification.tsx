import { INotificationProps } from '@/types/component-props';
import classes from '../../styles/notification.module.css';
import { useMemo } from 'react';
import { createPortal } from 'react-dom';

export const Notification = (props: INotificationProps) => {
    const { title, message, status, onClick } = props;

    const statusClasses = useMemo(() => status === 'success' ? classes.success : status === 'error' ? classes.error : classes.pending, [status]);

    const cssClasses = `${classes.notification} ${statusClasses}`;

    return createPortal(
        (<div className={cssClasses} onClick={onClick}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>), document.getElementById('notifications') as HTMLElement
    );
}
