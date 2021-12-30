import React from 'react';
import Screen from './Screen'
import SLInner from "./SLInner";
import ActionButton from "./ActionButton";
import MsgResult from "./MsgResult";


const t = window.t ?? ((t) => t);

export default class ResendLink extends Screen {

    render() {
        const p = this.props;
        const s = this.state;
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Waiting for confirmation')}</h4>

                <p>{t('We are waiting for confirmation for email')} </p>
                <p className="text-center"><b>{p.data.email}</b></p>
                <p>{t('Please, click on link in confirmation email.')}</p>
                <p>{t('If you have not received a confirmation email, please click on the button below to resend it.')}</p>

                <MsgResult msg={p.msg} error={p.error}/>

                <ActionButton onClick={p.onAction.bind(this, 'resend-verification-email',
                    {email:p.data.email})}
                              label={t('Resend Email')}
                              progress={p.progress}/>

                <ul className="bottom-form-link">
                    <li><a href=""  onClick={p.onChangeMode.bind(this, 'signup')}
                           data-analytics-event="clickedResendLink">{t('Sign up')}</a>
                    </li>
                </ul>


            </SLInner>

        )
    }
}
