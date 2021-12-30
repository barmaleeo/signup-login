import React from 'react';
import Screen from './Screen'
import SLInner from "./SLInner";
import ActionButton from "./ActionButton";
import TextInput from "./TextInput";
import MsgResult from "./MsgResult";

const t = window.t ?? ((t) => t);

export default class ChangePassword extends Screen {

    render() {
        const p = this.props;
        const s = this.state;
        return (
            <SLInner onClose={p.onClose} ref="content">
                <h4>{t('Change Password')}</h4>

                <p>{t('Please, enter a new password here and click the button below.')}</p>

                <TextInput onChange={this.onChangeValue.bind(this)}
                           progress={p.progress} msg={p.msg}
                           label={t('Password')}
                           name="password"
                           password="true"
                           value={s.password} placeholder={t('Enter password')}/>

                <MsgResult msg={p.msg} error={p.error}/>

                <ActionButton onClick={p.onAction.bind(this, 'reset-password?token='+p.token,
                    {password:s.password})}
                              label={t('Change Password')}
                              disabled={!s.passwordValid}
                              progress={p.progress}/>


            </SLInner>

        )
    }
}
