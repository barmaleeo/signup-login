import React from 'react';
import Screen from './Screen'
import SLInner from "./SLInner";
import TextInput from "./TextInput";
import ActionButton from "./ActionButton";
import MsgResult from "./MsgResult";


const t = window.t ?? ((t) => t);

export default class ResetPass extends Screen {

    render() {
        const p = this.props;
        const s = this.state;
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Reset password')}</h4>

                <p>{t("We`ll send a recovery link to")}</p>

                <TextInput onChange={this.onChangeValue.bind(this)}
                           label={t('Email')}
                           progress={p.progress} msg={p.msg}
                           name="email"
                           value={s.email} placeholder={t('Your Email')}/>

                <MsgResult msg={p.msg} error={p.error}/>

                <ActionButton onClick={p.onAction.bind(this, 'request-password-reset', {email:s.email})}
                              label={t('Send recovery link')}
                              disabled={!s.emailValid}
                              progress={p.progress}/>


                <ul className="bottom-form-link">
                    <li><a href="#"  onClick={p.onChangeMode.bind(this, 'login')}
                           data-analytics-event="clickedSignUpLink">{t('Log in')}</a>
                    </li>
                    <li><a href="#"  onClick={p.onChangeMode.bind(this, 'signup')}
                           data-analytics-event="clickedSignUpLink">{t('Sign up')}</a>
                    </li>
                </ul>


            </SLInner>

        )
    }
}
