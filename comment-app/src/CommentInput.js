/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';

class CommentInput extends Component{
    static defaultProps = {
        // comment:{
        //     username:this.state.username,
        //     content:this.state.content
        // }
    };

    constructor(){
        super();
        this.state = {
            username:'',
            content:'',
            loaded:false,
        }
    }

    componentWillMount(){
        this._loadUserName();
    }

    componentDidMount(){
        this.textarea.focus();
    }

    _saveUserName(){
        let username = this.state.username;
        localStorage.setItem('username',username);
    }

    _loadUserName(){
        let username = localStorage.getItem('username');
        if(username != ''){
            this.setState({username})
        }
    }

    handleUsernameChange(e){
        let username = e.target.value;
        this.setState({
            username:username,
        })
    }

    handleTextareaChange(e){
        let content = e.target.value;
        this.setState({
            content:content
        })
    }

    handleSubmitChange(e){
        const {username,content} = this.state;
        this.props.comment({username,content});
        this._saveUserName();
        this.setState({
          content:''
        })
    }

    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onChange={this.handleUsernameChange.bind(this)} value={this.state.username}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea onChange={this.handleTextareaChange.bind(this)} value={this.state.content} ref={(element) => this.textarea = element}></textarea>
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