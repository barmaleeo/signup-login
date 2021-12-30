import React, {Component} from 'react';
import SignupLoginWrapper from './lib/SignupLoginWrapper.jsx'
//import './LoginContainerStyle';


export default class LoginContainer extends Component {
    componentDidMount() {
        new SignupLoginWrapper();

    }

    render() {
        const p = this.props;
        const s = this.state;
        return (
            <div id="">
            </div>
        )
    }
}