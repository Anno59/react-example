import React,{Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component{
	static propTypes = {
		comments: PropTypes.array,
		onDeleteComment: PropTypes.func
	};

	static defaultProps = {
		comments: []
	};

	componentWillMount(){

	}

	componentDidMount(){
		console.log('mount',this.props.children)
	}

	componentWillUnmount(){

	}

	handleDeleteComment(index){
		this.props.onDeleteComment(index);
		// console.log(index);
	}

	render(){
		return (
			<div>
				{
					this.props.comments.map((e,index)=>
						 <Comment
							comment={e}
							key={index}
							index={index}
							onDeleteComment={this.handleDeleteComment.bind(this)}/>
					)
				}
			</div>
		)
	}
}
// {
// 	this.props.comments.map(function(e,index){
// 		return <Comment
// 			comment={e}
// 			key={index}
// 			index={index}
// 			onDeleteComment={this.handleDeleteComment.bind(this)}/>
// 	})
// }
export default CommentList;