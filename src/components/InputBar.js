import React from 'react';
import PropTypes from 'prop-types';

export class InputBar extends React.Component {

    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }

    handleAdd(){
        if(this.state.text == ''){
            console.warn('Cannot add an empty item');
            return;
        }
        this.props.addItem(this.state.text);
        this.setState({text:''})
    }

    render(){
        return (
            <div>
                <input value={this.state.text} onChange={this.handleChange.bind(this)} placeholder="Insert a name here"/>
                <button onClick={() => this.handleAdd()}>Add</button>
            </div>
        )
    }
}

InputBar.propTypes = {
    addItem: PropTypes.func
}