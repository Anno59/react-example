import React,{Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
	render(){
		const comments = [
			{username: 'Jerry', content: 'Hello'},
			{username: 'Tomy', content: 'World'},
			{username: 'Lucy', content: 'Good'}
		];

		return (
			<div>
				{
					this.props.comment.map(function(e,index){
						return <Comment comment={e} key={index}/>
					})
				}
			</div>
		)
	}
}

export default CommentList;