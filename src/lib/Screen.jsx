import {PureComponent} from 'react';


export default class Screen extends PureComponent {
    state = {};
    onChangeValue = (name, value, valid) => {
        this.setState({[name]:value, [name+'Valid']:valid}, this.props.clearMsg)
    };
    fade = (value, callback)=> {
        this.refs.content.fade(value, callback)
    };

}
