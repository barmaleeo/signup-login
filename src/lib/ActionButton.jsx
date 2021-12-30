import React, {PureComponent} from 'react';
import styled from 'styled-components'
import SLInner from "./SLInner";

const ActionButtonStyled = styled.div`
  margin-bottom: 15px;

  button {
    border-radius: .3em;
    display: inline-block;
    font-weight: bold;
    font-size: inherit;

    padding: .6em 1.3em;
    position: relative;
    text-decoration: none;
    border: 0;
    background: #61ba46;;

    color: #fff;
    cursor: pointer;
    margin-bottom: 0;
    width: 100%;
    box-shadow: none;

    &:hover {
      background: #509a3a;;
    }

    &:disabled {
      opacity: 0.65;
      background: rgb(97, 186, 70);;
    }
  }
`;


export default class ActionButton extends PureComponent {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <ActionButtonStyled className="submit">
                <button onClick={p.onClick}
                        className={p.className}
                        onTouchStart={p.onClick}
                        disabled={p.progress || p.disabled}>{p.label}</button>
            </ActionButtonStyled>
        )
    }
}
