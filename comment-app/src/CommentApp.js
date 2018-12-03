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
        comment: localStorage.getItem('comment') || []
      }
    }

    _saveCommentList(){
        let commentList = this.state.comment;
        localStorage.setItem('commentList',JSON.stringify(commentList));
    }

    _loadCommentList(){
        let commentList = localStorage.getItem('commentList');
        commentList = commentList ? JSON.parse(commentList) : [];
        this.setState({
            comment :commentList
        })
    }

    _deleteCommentList(element){
        let commentList = localStorage.getItem('commentList');
        commentList = commentList ? JSON.parse(commentList) : [];
        // console.log(commentList);
        const index = element.target.getAttribute('index');
        commentList.splice(index,1);
        this.setState({
            comment :commentList
        },()=>{
            this._saveCommentList(); //setState后调用保存方法
        });
    }

    componentWillMount(){
        this._loadCommentList();
    }

    // componentWillUnmount(){
    // }

    handleInputComment(comments){
        if (!comments) return;
        if (!comments.username) return alert('请输入用户名');
        if (!comments.content) return alert('请输入评论内容');
        const comment = this.state.comment;
        comment.push(comments);
        this.setState({comment});
        this._saveCommentList();
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput comment={this.handleInputComment.bind(this)}/>
                <CommentList comments={this.state.comment} handleDelete={this._deleteCommentList.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp;