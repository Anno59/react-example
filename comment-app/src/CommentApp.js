import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
	constructor(){
		super();
		this.state = {
			comment:[]
		};
	}

	componentWillMount(){
		this._loadLocalCommentList();
	}

	componentDidMount(){
		console.log('Did')
	}

	_saveLocalCommentList(comment){
		localStorage.setItem('comment',JSON.stringify(comment));
	}

	_loadLocalCommentList(){
		let comment = localStorage.getItem('comment');
		if(comment){
			comment = JSON.parse(comment);
			this.setState({
				comment:comment
			})
		}
	}

	handleSubmitComment(comment){
		if(!comment) return;
		if(!comment.username) return alert('请输入用户名');
		if(!comment.content) return alert('请输入评论内容');
		const commentList = this.state.comment;
		commentList.push(comment);
		this.setState({
			comment: commentList
		});
		this._saveLocalCommentList(commentList);
	}

	handleDeleteComment(index){
		let commentList = this.state.comment;
		commentList.splice(index,1);
		this.setState({
			comment:commentList
		});
		this._saveLocalCommentList(commentList);
	}

	render(){
		// console.log('render');
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList
					comments={this.state.comment}
					onDeleteComment={this.handleDeleteComment.bind(this)}
				/>
			</div>
		)
	}
}

export default CommentApp;