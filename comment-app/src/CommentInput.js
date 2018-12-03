/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';

class CommentInput extends Component{
    // static defaultProps = {
        // commentList:[]
    // };

    constructor(){
        super();
        this.state = {
            username:'',
            content:'',
            loaded:false,
        }
    }

    componentWillMount(){
        this._loadUsername();
    }

    componentDidMount(){
        this._loadUsername();
        this.handleTextareaFocus();
    }

    _saveUsername(username){
        localStorage.setItem('username' , username)
    }

    _loadUsername(){
        const username = localStorage.getItem('username');
        if(username != null){
            this.setState({username})
        }
    }

    handleUsernameChange(e){
        let username = e.target.value;
        this.setState({
            username:username,
        })
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value);
    }

    handleTextareaChange(e){
        let content = e.target.value;
        // console.log('%c%s','color:#f00',content)
        this.setState({
            content:content
        })
    }

    handleSubmitChange(e){
        const {username,content} = this.state;
        const date = +new Date();
        this.props.comment({username,content,date});
        this.setState({
            content:''
        })
        this.handleTextareaFocus();
    }

    handleTextareaFocus(){
        this.textarea.focus();
    }

    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)} value={this.state.username}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} onChange={this.handleTextareaChange.bind(this)} value={this.state.content}></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmitChange.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;