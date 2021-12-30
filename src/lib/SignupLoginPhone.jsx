import React, {PureComponent} from 'react';
import styled from 'styled-components'
import Login from "./Login";
import Signup from "./Signup";
import EnterCode from "./EnterCode";
import SignupPhone from "./SignupPhone";

const SignupLoginStyled = styled.div`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transition: background-color ease-in-out 0.5s;
  &.in{
    background: rgba(0,0,0, 0.1);  
  }
 
`;

const t = window.t ?? ((t) => t);
const $ = window.$;

export default class SignupLoginPhone extends PureComponent {
    state = {mode:'resend', success:false, data:{}, show:'', msg:{}};
    onClose = () => {
        this.setState({show:'out'})
    };
    componentDidMount(){
        this.setState({show:'in', mode:this.props.mode})
    }
    onAction = (action, data, e) => {
        e.preventDefault();
        const self = this;
        self.setState({data:data, progress:true, msg:{}, error:false});
        $.post('/' + this.props.lang + '/' + action, data, (r) => {
            console.log(r);
            const state = {
                progress:false,
                error: !(r.status === 'ok'),
                success: true,
                msg: r.msg ?? {},
            };
            if(state.msg.confirmation){
                state.mode = 'resend';
                state.success = false;
                state.msg = {}
            }
            self.setState(state)

        }, 'json')
            .fail((e) => {
                if(e.status !== 302) {
                    //console.error(e);
                    self.setState({
                        progress:false,
                        success:false,
                        error:true,
                        msg: {result: t('Something went wrong! Please try again later!')}})
                }
            })
    };
    onChangeMode = (mode, e) => {
        e.preventDefault();
        this.refs[this.state.mode].fade('out', ()=> {
            setTimeout(() => {this.setState({mode: mode, success:false, progress:false, msg:{}})},250)
        });
    };
    onClickAction = (action, params) => {

    };
    fade(callback){

    }
    renderBlocks = () =>{
        const p = this.props;
        const s = this.state;
        switch(s.mode){
            case 'login':
                // return <Login onChangeMode={this.onChangeMode}
                //               ref='login'
                //               progress={s.progress}
                //               msg={s.msg} error={s.error}
                //               clearMsg={()=>{this.setState({msg:{}})}}
                //               onAction={this.onAction}
                //               onClose={p.onClose}/>;
            case 'signup':
                 return <SignupPhone onChangeMode={this.onChangeMode}
                                     ref='signup'
                                     success={s.success}
                                     progress={s.progress}
                                     msg={s.msg} error={s.error}
                                     clearMsg={()=>{this.setState({msg:{}})}}
                                     onClose={p.onClose}
                                     onAction={this.onAction}/>;
            case 'confirm':
                return <EnterCode onChangeMode={this.onChangeMode}
                                  ref='resend'
                                  progress={s.progress}
                                  msg={s.msg} error={s.error}
                                  onAction={this.onAction}
                                  onClose={p.onClose}
                                  data={s.data}/>;
            default:
                return null;
        }
    };
    render() {
        const p = this.props;
        const s = this.state;
        const blocks = this.renderBlocks();
        if(blocks){
            return (
                <SignupLoginStyled className={s.show}>
                    {blocks}
                </SignupLoginStyled>
            )

        }else{
            return null;
        }
    }
}
