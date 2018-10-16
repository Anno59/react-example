/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    constructor(){
      super();
      this.state = {
				comment: []
      }
    }

    handleInputComment(comment){
			if (!comment.username) return alert('请输入用户名');
			if (!comment.content) return alert('请输入评论内容');
			this.state.comment.push(comment);
      this.setState({
				comment :this.state.comment
      })
      // this.setState({
				// comment :comment
      // })
		}
    render(){
        return(
            <div className="wrapper">
                <CommentInput comment={this.handleInputComment.bind(this)}/>
                <CommentList comments={this.state.comment}/>
            </div>
        )
    }
}

export default CommentApp;