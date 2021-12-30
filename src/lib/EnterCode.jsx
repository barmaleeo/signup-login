import React from 'react';
import Screen from './Screen'
import SLInner from "./SLInner";
import ActionButton from "./ActionButton";
import MsgResult from "./MsgResult";
import CodeInput from "./CodeInput";


const t = token =>  window.t ?( window.t(token) ?? token) : token;

export default class EnterCode extends Screen {

    onSubmit = (a, e) => {
        console.log(a, e)
    }
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Enter code')}</h4>

                <p>{t('We sent an SMS code to the phone number')} </p>
                <p className="text-center"><b>{p.data.phone}</b></p>
                <p>{t('Please, click on link in confirmation email.')}</p>

                <CodeInput size={6} onSubmit={this.onSubmit}
                           onChange={this.onChangeValue.bind(this, 'code')}/>

                <MsgResult msg={p.msg} error={p.error}/>

                <ActionButton onClick={p.onAction.bind(this, 'confirm',
                    {phone:p.data.phone})}
                              label={t('Confirm')}
                              disabled={!s.codeValid}
                              progress={p.progress}/>

                <ul className="bottom-form-link">
                    <li><a href=""  onClick={p.onChangeMode.bind(this, 'resend-code')}
                           data-analytics-event="clickedResendLink">{t('Resend Code')}</a>
                    </li>
                </ul>


            </SLInner>

        )
    }
}
