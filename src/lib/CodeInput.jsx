import React, {Component} from 'react';
import styled from 'styled-components'

const CodeInputStyled = styled.div`
  margin-bottom: 20px;
  .digits-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CodeDigitStyled = styled.input`
  width: 26px;
  height: 36px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`


export default class CodeInput extends Component {
    state = {digits: []};
    digits = {};
    onKeydown = (k, e) => {
        console.log(k, e.keyCode, e.target.value)
        const p = this.props;
        const s = this.state;
        const kc = e.keyCode;

        if([46, 9].includes(kc)){
            console.log('backspace-del')
        }else if(kc === 37){
            this.focusDigit(k-1)
        }else if(kc === 8){
            const digits = s.digits;
            if(digits.length >= k){
                digits[k] = ''
                this.focusDigit(k-1)
                this.setState({digits:digits}, ()=>{
                    const str = digits.join('');
                    p.onChange(str, str.length === p.size)
                })
            }
        }else if([39, 13].includes(kc)){
            this.focusDigit(k+1)
        }else if((kc >= 48 && kc<=59) || (kc >= 96 && kc <= 105)){
            const digits = s.digits;
            do {
                if(digits.length > +k){
                    digits[k] = e.key;
                }else if(digits.length === +k){
                    digits.push(e.key)
                }else{
                    digits.push('')
                }
            } while (digits.length + 1 < k )
            this.focusDigit(k+1)
            //e.preventDefault();
            const state = {digits: digits};
            this.setState(state, ()=>{
                const str = digits.join('');
                p.onChange(str, str.length === p.size)
            });
        }
    }

    focusDigit = (k) => {
        if(this.digits[k]){
            this.digits[k].focus();
        }

    }
    componentDidMount() {
        this.focusDigit(0);
    }

    renderDigit = (i, k) => {
        return (
            <CodeDigitStyled value={i} ref={ref=>{this.digits[k] = ref}}
                             onKeyDown={this.onKeydown.bind(this, k)}/>
        )
    }
    render() {
        const p = this.props;
        const s = this.state;
        const digits = []
        for(let i = 0; i < p.size; i++){
            if(s.digits.length <= i){
                digits.push('')
            }else{
                digits.push(s.digits[i]);
            }
        }
        return (
            <CodeInputStyled className="">
                <div className="digits-container">
                    {digits.map(this.renderDigit)}
                </div>
            </CodeInputStyled>
        )
    }
}