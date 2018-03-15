import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
	constructor(){
		super();
		this.setState({
			comment:{}
		})
	}

	handleSubmitComment(e){
		this.setState({
			comment:e
		})
	}
	render(){
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList comments={this.state.comment}/>
			</div>
		)
	}
}

export default CommentApp;