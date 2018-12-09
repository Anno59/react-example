/**
 * Created by 372025284@qq.com on 2018.12.09.
 */
import React,{Component} from 'react';

const wrapWithLoadData = (WrappedComponent,name) => {
    return class extends Component{
        constructor(){
            super();
            console.log(this);
            this.state = {
                data:null,
            }
        }

        saveData(data){
            console.log(this);
            localStorage.setItem(name,JSON.stringify(data))
        }

        // loadData(){
        componentWillMount(){
            console.log(this)
            let data = localStorage.getItem(name);
            try{
                data = JSON.parse(data)
                this.setState({data})
            }catch(e){
                // data = localStorage.getItem(name);
                this.setState({data})
            }
            // console.log(data);
            // this.setState({data})
        }

        render(){
            console.log(this);
            // const props = {
            //     loadData : this.loadData.bind(this),
            //     saveData : this.saveData,
            //     ...this.props
            // }
            // console.log(this.state.data);

            return (
                <WrappedComponent
                    data={this.state.data}
                    // loadData={this.loadData.bind(this)}
                    saveData={this.saveData}
                    {...this.props}
                />
            )
        }
    }
};

export default wrapWithLoadData;