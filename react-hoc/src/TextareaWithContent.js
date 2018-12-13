import wrapWithContent from './wrapWithLoadData.js';
import React,{Component} from 'react';

class TextareaWithContent extends Component{
    render(){
        return <textarea>{this.props.data}</textarea>
    }
}

TextareaWithContent = wrapWithContent(TextareaWithContent,'content');

export default TextareaWithContent;