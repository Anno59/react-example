import React,{Component} from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component{
	static propTypes = {
		// comment:PropTypes.object.isRequired
	};

	constructor(){
		super();
		this.state = {
			username:'',
			content:''
		}
	}
	handleUsernameChange(e){
		this.setState({
			username:e.target.value
		})
	}
	handleContentChange(e){
		this.setState({
			content:e.target.value
		})
	}
	handleButtonClick(e){
		if(this.props.onSubmit){
			const {username,content} = this.state;
			this.props.onSubmit({username,content});
			this.setState({
				content:''
			})
		}
	}

	handleUsernameBlur(e){
		this._saveUsername(e.target.value);
	}

	_saveUsername(username){
		localStorage.setItem('username',username);
	}

	_loadUsername(){
		const username = localStorage.getItem('username');
		if(username){
			this.setState({
				username:username
			})
		}
	}

	componentWillMount(){
		this._loadUsername();
	}

	componentDidMount(){
		this.textarea.focus();
	}

	render(){
		return (
			<div className='comment-input'>
				<div className='comment-field'>
					<span className='comment-field-name'>用户名:</span>
					<div className='comment-field-input'>
						<input
							value={this.state.username}
							onChange={this.handleUsernameChange.bind(this)}
							onBlur={this.handleUsernameBlur.bind(this)}
						/>
					</div>
				</div>
				<div className='comment-field'>
					<span className='comment-field-name'>评论内容:</span>
					<div className='comment-field-input'>
						<textarea
							value={this.state.content}
							onChange={this.handleContentChange.bind(this)}
							ref={(textarea)=>{this.textarea = textarea}}
						/>
					</div>
				</div>
				<div className='comment-field-button'>
					<button onClick={this.handleButtonClick.bind(this)}>
							提交
					</button>
				</div>
			</div>
		)
	}
}

export default CommentInput;