import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const SLInnerStyled = styled.div`
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  //height:90vh;
  max-height: 90vh;
  background: white;
  border: 1px solid #a6a6a6;
  color: #282c34;
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgba(0,0,0,0.2) 0 0 10px;
  font-size: 14px;
  transition: opacity ease-in-out 0.25s;
  opacity:0;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  position:relative;
  >div.close{
    cursor: pointer;
    font-size: 50px;
    font-family: monospace;
    font-weight: 100;
    color: #666;
    position:absolute;
    right: 10px;
    top:0px;
  }
  >div.inner{
    width: 100%;
    margin: 0 auto;
    padding:20px 0;
    >h4{
      font-family: "Montserrat Bold", sans-serif;
      text-align: center;
      margin-bottom: 24px;
    }
    a{
     color: #4B4B4B; 
    }
  }
  &.in{
    opacity:1;
    overflow-y: auto;
  }
  >h2, >h3, >h4{
    margin-bottom: 20px;
  }
  div.submit{
  }
  ul{
    text-align: center;
    font-size: 14px;
    display: block;
    padding: 0;
    >li{
      display: inline-block;
      list-style: none;
      &:last-of-type{
        :before{
            content: "\\2022";
            margin: 0 8px 0 4px;
        }
      }
    }
  }
`;

export default class SLinner extends PureComponent {
    state = {show:''};
    componentDidMount() {
        const element = ReactDOM.findDOMNode(this.refs.content);
        window.addEventListener('keyup', this.keyUpListener );
        window.addEventListener('touchstart', this.clickListener );
        window.addEventListener('mousedown', this.clickListener );

        setTimeout(() => {this.setState({show:' in', element:element})},0)
    }
    keyUpListener = (event) => {
        const e = event || window.event;
        if(e.code === 'Escape' && this.state.show === ' in'){
            this.handleClickClose()
        }
    };
    componentWillUnmount() {
        window.removeEventListener('keyup', this.keyUpListener );
        window.removeEventListener('touchstart', this.clickListener );
        window.removeEventListener('mousedown', this.clickListener )
    }
    clickListener = (event) => {
        const e = event || window.event;
        if(this.state.show === ' in' && !this.state.element.contains(e.target)){
            window.removeEventListener('keyup', this.keyUpListener );
            window.removeEventListener('touchstart', this.clickListener );
            window.removeEventListener('mousedown', this.clickListener );
            this.handleClickClose()

        }
    };
    handleClickClose = () => {
        const self = this;
        self.setState({show:' out'}, () => {
            self.props.onClose();
        })
    };

    fade = (value = 'out', callback = ()=>{}) => {
        this.setState({show:value}, callback)
    };
    render(){
        return (
            <SLInnerStyled className={this.state.show} ref="content">
                <div className="close" onClick={this.handleClickClose}>&times;</div>
                <div className="inner">
                    {this.props.children}
                </div>
            </SLInnerStyled>
        )
    }

}

