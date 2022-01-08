import React from 'react';
import Screen from './Screen'
import SLInner from "./SLInner";
import TextInput from "./TextInput";
import ActionButton from "./ActionButton";
import MsgResult from "./MsgResult";

const t = window.t ?? ((t) => t);


export default class Signup extends Screen {
    defaultFields = [
        {type: 'name', westChars: true, placeholder: 'Your Name'},
        {type: 'email',  placeholder: 'Your Email'},
        {type: 'password', isPassword: true},
    ];
    capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
        first.toLocaleUpperCase(locale) + rest.join('')
    renderFields = () => {
        const fields = [];
        const p = this.props;
        const s = this.state;
        let key = 0;
        for(const field of p.fields ?? this.defaultFields){
            const label = field.label ?? this.capitalizeFirstLetter(field.type);
            const placeholder = field.placeholder ?? ('Enter ' + this.capitalizeFirstLetter(field.type))
            if(typeof field.type === 'string' && field.type.length) {
                fields.push(
                    <TextInput key={key++}
                               onChange={this.onChangeValue.bind(this)}
                               westChars={field.westChars}
                               progress={p.progress}
                               msg={p.msg}
                               label={t(label)}
                               disabled={p.success}
                               name={field.type}
                               password={field.isPassword}
                               value={s[field.type]}
                               placeholder={t(placeholder)}/>
                )
            }
        }
        return fields;
    }



    render() {
        const p = this.props;
        const s = this.state;
        let valid = true;
        let requestData = {}
        for(const field of p.fields ?? this.defaultFields) {
            valid = valid && s[field.type];
            requestData[field.type] = s[field.type];
        }
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Sign up')}</h4>
                {this.renderFields()}

                <MsgResult msg={p.msg} error={p.error}/>
                {p.success ?
                    <ActionButton onClick={p.onAction.bind(this, 'resend-verification-email',
                        {email:s.email})}
                                  label={t('Resend Email')}
                                  progress={p.progress}/>:
                    <ActionButton onClick={p.onAction.bind(this, 'signup', requestData)}
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
