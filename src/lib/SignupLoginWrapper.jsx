import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import SignupLogin from "./SignupLogin";

export default class SignupLoginWrapper {
    container = null;

    constructor(options = {}) {
        this.options = {
            signupFields: [
                {type: 'name', placeholder: 'Your Name'},
                {type: 'email',},
                {type: 'password',},
            ],
            ...options};
        this.container = document.getElementById('js-signup-login-container');
        if(!this.container){
            const elem = document.createElement('div');
            elem.id = "js-signup-login-container";
            this.container = document.body.appendChild(elem)
        }
        const mode = this.container.dataset.mode;
        const self = this;
        const match = RegExp('[?&]token=([^&]*)').exec(window.location.search);
        const token = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        if(token || mode){
            const path = Document.location.pathname.split('/');
            let lang = 'en';
            if(path.length > 1 && path[1].length === 2){
                lang = path[1]
            }
            render(<SignupLogin onClose={this.unmountComponent}
                                signupFields={this.options.signupFields}
                                token={token}
                                mode={token?'changePassword':mode}
                                lang={lang}/>, self.container);
        }
        for(const item of document.getElementsByClassName('js-login-signup')){
            item.addEventListener('click', this.mountComponent);

        }
        return this;
    };
    mountComponent = (e) => {
        e.preventDefault();
        render(<SignupLogin onClose={this.unmountComponent}
                            signupFields={this.options.signupFields}
                            mode={e.currentTarget.dataset.mode ?? 'signup'}
                            lang={'en'}/>, this.container);
    }
    unmountComponent = (e) => {
        setTimeout(() => {
            unmountComponentAtNode(this.container)
        }, 250)
    }
}




