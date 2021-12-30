import React from 'react';
import SLInner from "./SLInner";
import Screen from "./Screen";
import TextInput from "./TextInput";
import ActionButton from "./ActionButton";
import MsgResult from "./MsgResult";


const t = window.t ?? ((t) => t);


export default class Login extends Screen {
    render() {
        const p = this.props;
        const s = this.state;
        const valid = s.emailValid && s.passwordValid;
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Log in')}</h4>
                <TextInput onChange={this.onChangeValue.bind(this)}
                           progress={p.progress} msg={p.msg}
                           label={t('Email')}
                           name="email"
                           value={s.email} placeholder={t('Your Email')}/>

                <TextInput onChange={this.onChangeValue.bind(this)}
                           progress={p.progress} msg={p.msg}
                           label={t('Password')}
                           name="password"
                           password="true"
                           value={s.password}
                           placeholder={t('Enter password')}/>

                <MsgResult msg={p.msg} error={p.error}/>


                <ActionButton onClick={p.onAction.bind(this, 'login', {email:s.email, password:s.password})}
                              label={t('Log in')} disabled={!valid}
                              progress={p.progress}/>

                <ul className="bottom-form-link">
                    <li><a href=""
                           onClick={p.onChangeMode.bind(this, 'restore')}
                           data-analytics-event="clickedForgotPasswordLink">{t('Forgot password?')}</a>
                    </li>
                    <li><a href="" onClick={p.onChangeMode.bind(this, 'signup')}
                           data-analytics-event="clickedLoginLink">{t('Sign up')}</a>
                    </li>
                </ul>


            </SLInner>

        )
    }
}
