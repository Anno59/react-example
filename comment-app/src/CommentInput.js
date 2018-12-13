/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import wrapWithLoadData from './wrapWithLoadData.js'

class CommentInput extends Component{
    // static defaultProps = {
        // commentList:[]
    // };

    constructor (props) {
        // console.log(props)
        super(props)
        this.state = {
            username: props.data,
            content: ''
        }
        console.log(this.state)
    }

    saveData(data){
        // console.log(this);
        localStorage.setItem(JSON.stringify(data))
    }

    // _saveUsername(username){
    //     localStorage.setItem('username' , JSON.stringify(username));
    // }

    // _loadUsername(){
    //     const username = localStorage.getItem('username');
    //     if(username != null){
    //         this.setState({username})
    //     }
    // }

    // componentWillMount(){
    //     console.log(1)
        // this.props.loadData().bind(this);
        // this._loadUsername();
    // }

    componentDidMount(){
        // this.props.loadData();
        // this._loadUsername();
        this.handleTextareaFocus();
    }

    handleUsernameChange(e){
        let username = e.target.value;
        this.setState({
            username
        })
    }

    handleUsernameBlur(event){
        this.props.saveData(event.target.value);
        // this._saveUsername(event.target.value);
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
        // console.log(username)
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
        console.log(this.state.username)
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

CommentInput = wrapWithLoadData(CommentInput,'username');

export default CommentInput;