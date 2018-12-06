import React,{Component} from 'react';

export default (WrappedComponent,name) => {
    class NewComponent extends Component{
        constructor(){
            super();
            this.state = {
                name : ''
            }
        }

        componentWillMount(){
            const name = localStorage.getItem(name);
            this.setState({name})
        }

        render(){
            return <WrappedComponent data={this.state.name}/>
        }
    }
    return NewComponent
}