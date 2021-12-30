import React, {PureComponent} from 'react';
import styled from 'styled-components'

const MsgResultStyled = styled.div`
    margin-bottom: 20px;
    color:rgb(222, 53, 11);;
    &.success{
      color: darkgreen;
    }
    &.error{
      color:rgb(222, 53, 11);;
    }
`;


export default class MsgResult extends PureComponent {
    render() {
        const p = this.props;
        const s = this.state;
        const msg = typeof p.msg === 'object' ? p.msg.result : p.msg;
        if(msg) {
            return (
                <MsgResultStyled className={'msg ' + (p.error ? 'error' : 'success')}>
                    {msg}
                </MsgResultStyled>
            )
        }else{
            return null;
        }
    }
}
