import React, {PureComponent} from 'react';
import styled from 'styled-components'
import Login from "./Login";
import Signup from "./Signup";
import ResetPass from "./ResetPass";
import ResendLink from "./ResendLink";
import ChangePassword from "./ChangePassword";

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
  background: rgba(0,0,0,0);
  transition: background-color ease-in-out 0.25s;
  &.in{
    background: rgba(0,0,0, 0.2);  
  }
 
`;

const $ = window.$

export default class SignupLogin extends PureComponent {
    state = {mode:'login', success:false, data:{}, show:'', msg:{}};
    onClose = () => {
        this.setState({show:'out'}, ()=>{
            this.props.onClose();
        })
    };

    componentDidMount(){
        setTimeout(()=>{
            this.setState({show:'in', mode:this.props.token?'changePassword':this.props.mode})
        })
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
                success: (r.status === 'ok'),
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
                        msg: {result: 'Something went wrong! Please try again later!'}})
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
                return <Login onChangeMode={this.onChangeMode}
                              ref='login'
                              progress={s.progress}
                              msg={s.msg} error={s.error}
                              clearMsg={()=>{this.setState({msg:{}})}}
                              onAction={this.onAction}
                              onClose={this.onClose}/>;
            case 'signup':
                return <Signup onChangeMode={this.onChangeMode}
                               ref='signup'
                               fields={p.signupFields}
                               success={s.success}
                               progress={s.progress}
                               msg={s.msg} error={s.error}
                               clearMsg={()=>{this.setState({msg:{}})}}
                               onClose={this.onClose}
                               onAction={this.onAction}/>;
             case 'restore':
                return <ResetPass onChangeMode={this.onChangeMode}
                                  ref='restore'
                                  progress={s.progress}
                                  msg={s.msg} error={s.error}
                                  clearMsg={()=>{this.setState({msg:{}})}}
                                  onAction={this.onAction}
                                  onClose={this.onClose}/>;
            case 'resend':
                return <ResendLink onChangeMode={this.onChangeMode}
                                   ref='resend'
                                   progress={s.progress}
                                   msg={s.msg} error={s.error}
                                   onAction={this.onAction}
                                   onClose={this.onClose}
                                   data={s.data}/>;
            case 'changePassword':
                return <ChangePassword onChangeMode={this.onChangeMode}
                                       ref='changePassword'
                                       progress={s.progress}
                                       token={p.token}
                                       msg={s.msg} error={s.error}
                                       clearMsg={()=>{this.setState({msg:{}})}}
                                       onAction={this.onAction}
                                       onClose={this.onClose}
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
