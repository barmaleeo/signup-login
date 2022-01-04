import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import SignupLoginPhone from "./SignupLoginPhone";

export default class SignupLoginWrapper {
    container = null;

    constructor() {
        this.container = document.getElementById('js-signup-login-phone-container');
        if(!this.container){
            const elem = document.createElement('div');
            elem.id = "js-signup-login-phone-container";
            this.container = document.body.appendChild(elem)
        }
        const mode = this.container.dataset.mode;
        const self = this;
        const match = RegExp('[?&]token=([^&]*)').exec(window.location.search);
        const token = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        if(token || mode){
            render(<SignupLoginPhone onClose={this.unmountComponent}
                                     token={token}
                                     mode={token?'changePassword':mode}
                                     lang={'en'}/>, self.container);
        }
        for(const item of document.getElementsByClassName('js-login-signup-phone')){
            item.addEventListener('click', this.mountComponent);

        }
        return this;
    };
    mountComponent = (e) => {
        e.preventDefault();
        render(<SignupLoginPhone onClose={this.unmountComponent}
                            mode={e.currentTarget.dataset.mode ?? 'signup'}
                            lang={'en'}/>, this.container);
    }
    unmountComponent = (e) => {
        setTimeout(() => {
            unmountComponentAtNode(this.container)
        }, 250)
    }
}




