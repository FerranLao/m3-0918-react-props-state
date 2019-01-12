import React, {Component} from 'react';
import cx from 'classnames';
import './ListaItem.css';
import PropTypes from 'prop-types';


export class ListaItem extends Component{

    constructor(props){
        super();
        this.state = {
            selected: false
        }
    }

    handleSelect(e){
        console.log(`Selected ${this.props.children}`);
        this.setState({selected: !this.state.selected})
    }

    handleDelete(e){
        e.stopPropagation();
        console.log(`Delete ${this.props.children}`);
        this.props.onDelete(this.props.index);
    }

    static propTypes = {
        onDelete: PropTypes.func,
    };

    render(){
        let {children} = this.props;
        let {selected} = this.state;
        return (
            <li>
                <div onClick={(e) => this.handleSelect(e)} className={cx('simpson',{selected})}>
                    {children}
                    { selected && <button onClick={(e) => this.handleDelete(e)}>Candelete</button> }
                </div>
            </li>
        )
    }
}


