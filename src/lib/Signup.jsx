import React from 'react';
import Screen from './Screen'
import SLInner from "./SLInner";
import TextInput from "./TextInput";
import ActionButton from "./ActionButton";
import MsgResult from "./MsgResult";

const t = window.t ?? ((t) => t);


export default class Signup extends Screen {

    render() {
        const p = this.props;
        const s = this.state;
        const valid = s.nameValid && s.emailValid && s.passwordValid;
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Sign up')}</h4>

                <TextInput onChange={this.onChangeValue.bind(this)}
                           westChars={true}
                           progress={p.progress} msg={p.msg}
                           label={t('Name')}
                           disabled={p.success}
                           name="name"
                           value={s.name} placeholder={t('Your Name')}/>
                <TextInput onChange={this.onChangeValue.bind(this)}
                           progress={p.progress}
                           msg={p.msg}
                           label={t('Email')}
                           disabled={p.success}
                           name="email"
                           value={s.email} placeholder={t('Your Email')}/>
                <TextInput onChange={this.onChangeValue.bind(this)}
                           progress={p.progress} msg={p.msg}
                           disabled={p.success}
                           label={t('Password')}
                           name="password" password="true"
                           value={s.password} placeholder={t('Enter password')}/>

                <MsgResult msg={p.msg} error={p.error}/>
                {p.success ?
                    <ActionButton onClick={p.onAction.bind(this, 'resend-verification-email',
                        {email:s.email})}
                                  label={t('Resend Email')}
                                  progress={p.progress}/>:
                    <ActionButton onClick={p.onAction.bind(this, 'signup',
                        {name:s.name, email:s.email, password:s.password})}
                                  className="gt-signup-action"
                                  label={t('Sign up')} disabled={!valid || p.success}
                                  progress={p.progress}/>
                }

                <ul className="bottom-form-link">
                    <li><a href="#"  onClick={p.onChangeMode.bind(this, 'login')}
                           data-analytics-event="clickedLoginLink">{t('Already have an account? Log In')}</a>
                    </li>
                </ul>


            </SLInner>

        )
    }
}
