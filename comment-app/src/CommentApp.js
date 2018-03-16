import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
	constructor(){
		super();
		this.state = {
			comment:[]
		};
		console.log('constructor')
	}

	componentWillMount(){
		console.log('will')
	}

	componentDidMount(){
		console.log('Did')
	}

	handleSubmitComment(comment){
		if(!comment) return;
		if(!comment.username) return alert('请输入用户名');
		if(!comment.content) return alert('请输入评论内容');
		this.state.comment.push(comment);
		this.setState({
			comment: this.state.comment
		})
	}

	render(){
		console.log('render');
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}
				/>
				<CommentList comments={this.state.comment}/>
			</div>
		)
	}
}

export default CommentApp;