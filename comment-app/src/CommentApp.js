/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import wrapWithLoadData from './wrapWithLoadData.js'

class CommentApp extends Component{
    constructor(){
      super();
      this.state = {
          commentList: JSON.parse(localStorage.getItem('commentList')) || []
      }
    }

    // _saveCommentList(comment){
    //     localStorage.setItem('commentList',JSON.stringify(comment));
    // }

    // _loadCommentList(){
    //     let comment = localStorage.getItem('commentList');
    //     comment = comment ? JSON.parse(comment) : [];
    //     this.setState({ comment })
    // }

    _deleteCommentList(element){
        let commentList = localStorage.getItem('commentList');
        commentList = commentList ? JSON.parse(commentList) : [];
        // console.log(commentList);
        const index = element.target.getAttribute('index');
        commentList.splice(index,1);
        this.setState({
            commentList :commentList
        },()=>{
            this.props.saveData(commentList);
            // this._saveCommentList(commentList); //setState后调用保存方法
        });
    }

    // componentWillMount(){
    //     this.props.loadData('commentList');
        // this._loadCommentList();
    // }

    handleInputComment(comments){
        if (!comments) return;
        if (!comments.username) return alert('请输入用户名');
        if (!comments.content) return alert('请输入评论内容');
        const commentList = this.state.commentList;
        commentList.push(comments);
        console.log(commentList)
        this.setState({commentList});
        this.props.saveData(commentList);
        // this._saveCommentList(comment);
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput comment={this.handleInputComment.bind(this)}/>
                <CommentList comments={this.state.commentList} handleDelete={this._deleteCommentList.bind(this)}/>
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp,'commentList');

export default CommentApp;