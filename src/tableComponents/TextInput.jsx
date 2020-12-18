import React, {Component} from 'react'

export default class TextInput extends Component{
    constructor(props){
        super(props)
        this.state={

            defaultValue: this.props.defaultValue
        }

        this.onChange = this.onChange.bind(this)
        this.onChangeBlur = this.onChangeBlur.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({defaultValue: nextProps.defaultValue})
    }
    onChange(e){
        this.setState({
            defaultValue: e.target.value
        })
        this.props.onChange(e)
    }
    onChangeBlur(e){
        this.props.onChangeBlur(e)
    }

    render(){
        return(
            <input type={this.props.type}
                    name={this.props.name}
                    id={this.props.id}
                    className={this.props.className}
                    onChange={this.onChange.bind(this)}
                    value={this.state.defaultValue}
                    onBlur={this.props.isBlur === true ?this.onChangeBlur.bind(this):''}
            />
        )
    }
}