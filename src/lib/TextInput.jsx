import React, {PureComponent} from 'react';
import styled from 'styled-components'

const TextInputStyled = styled.div`

   text-align: left;
   margin-bottom: 20px;
   button, input{
    
      outline:none;
   }
   >div.control{
      background-color: #FAFBFC;
      //border: 2px solid #DFE1E6;
      border: 1px solid #999;
      box-sizing: border-box;
      //border-radius: 3px;
      //height: 44px;
      transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;
      label{
        font-size: 12px;
        margin: 5px 10px 0 10px;
      }
      input{
        padding: 3px 10px 3px 10px;
        max-width: 400px;
        width: 100%;
        font-size: 16px;
        margin: 0;
      }
      >div{
        display: flex;
        >input{
          flex:1;
          border: 0;
        }
        >button{
          background: transparent;
          border-width: 0;
        }
      }
      &.error{
        border-color: rgb(222, 53, 11);
      }
   }
   >div.msg{
      margin-top:8px;
      font-size:14px;
      line-height:17px;      
      color: rgb(222, 53, 11);
   }
`;

const t = window.t ?? ((t) => t);

export default class TextInput extends PureComponent {
    state={showPassword:false};
    validators = {
        name:  name => {
            const valid = name.trim().length >= 2;
            return {valid: valid, msg: valid ? '' : t('Must contain at least 2 chars.')}
        },
        password:  password => {
            const valid = password.trim().length >= 6;
            return {valid:valid, msg: valid ? '' : t('Must contain at least 6 chars.')}
        },
        phone: phone => {
            const clean = phone.replace(/[^0-9]+/gi, '');
            const valid = clean.length >= 11 && clean.length <= 11;
            return {valid:valid, msg: valid ? '' : t('Must be a correct phone number.')}
        },
        email: email => {
            const valid = !!email.match(/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/);

            return {valid:valid, msg: valid ? '' : t('Must be a valid email.')};
        }

    };
    onChange = (e) => {
        let value = e.target.value;
        if(this.props.westChars){
           value = value.replace(/[^-0-9a-zA-Zа-яА-Я\s.\[\]!@#$%^&*()_+="']/gim, '')
        }
        const name = this.props.name;
        console.log(this.validators[name](value));
        this.props.onChange(name, value, this.validators[name](value).valid);
    };
    getMsg(key){
        if(this.props.msg && this.props.msg[key]){
            if(Array.isArray(this.props.msg[key])) {
                return this.props.msg[key].join('\n')
            }else{
                return this.props.msg[key];
            }
        }
    }
    render() {
        const p = this.props;
        const s = this.state;
        const valid = this.validators[p.name](p.value ?? '');
        return (
            <TextInputStyled className={''} >
                <div className={'control' +(valid.valid?'':' error')}>
                    {p.label && <label>{p.label}</label>}
                    <div>
                        <input value={p.value ?? ''} onChange={this.onChange}
                               name={p.name}
                               title={p.title}
                               disabled={p.progress || p.disabled}
                               type={!p.password || s.showPassword?'text':'password'}
                               placeholder={p.placeholder}/>
                        {p.password &&
                            <button onClick={() => {this.setState({showPassword: !s.showPassword})}}>
                                {s.showPassword ?
                                    <svg width="22" height="15" viewBox="0 0 22 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
                                            fill="#4B4B4B"/>
                                    </svg>:
                                    < svg width = "22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 4C13.76 4 16 6.24 16 9C16 9.65 15.87 10.26 15.64 10.83L18.56 13.75C20.07 12.49 21.26 10.86 21.99 9C20.26 4.61 15.99 1.5 10.99 1.5C9.59 1.5 8.25 1.75 7.01 2.2L9.17 4.36C9.74 4.13 10.35 4 11 4ZM1 1.27L3.28 3.55L3.74 4.01C2.08 5.3 0.78 7.02 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.8 16.08L18.73 19L20 17.73L2.27 0L1 1.27ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.78 8 9C8 10.66 9.34 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C8.24 14 6 11.76 6 9C6 8.21 6.2 7.47 6.53 6.8V6.8ZM10.84 6.02L13.99 9.17L14.01 9.01C14.01 7.35 12.67 6.01 11.01 6.01L10.84 6.02Z" fill="#4B4B4B"/>
                                    </svg>
                                }
                            </button>
                        }
                    </div>
                </div>
                <div className="msg">{valid.msg?valid.msg:this.getMsg(p.name)}</div>
            </TextInputStyled>
        )
    }
}
