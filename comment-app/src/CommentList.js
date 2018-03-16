import React,{Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
	// static defaultProps = {
	// 	comments:[]
	// };
	componentDidMount(){
		console.log('mount',this.props.children)
	}

	render(){
		return (
			<div>
				{
					this.props.comments.map(function(e,index){
						return <Comment comment={e} key={index}/>
					})
				}

			</div>
		)
	}
}

export default CommentList;