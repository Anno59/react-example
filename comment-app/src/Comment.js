import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
	static propTypes = {
		comment:PropTypes.object.isRequired
	};

	constructor(){
		super();
		this.state = {
			duringTime : ''
		}
	}

	componentWillMount(){
		this._getDuringTime();
		this._timer = setInterval(()=>{this._getDuringTime()},1000);
	}

	componentWillUnmount(){
		clearInterval(this._timer);
	}

	_replaceCodeContent(e){
		return e
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/`([\S\s]+?)`/g, '<code>$1</code>');
	}

	_getDuringTime(){
		let timeStamp = this.props.comment.timeStamp;
		let duringSecond = (+new Date() - timeStamp) / 1000;
		let duringTime = duringSecond < 60 ? `${Math.floor(Math.max(duringSecond,1))}秒前` : `${Math.floor(duringSecond / 60)}分钟前`;
		this.setState({
			duringTime : duringTime
		})
	}

	handleDeleteComment(){
		this.props.onDeleteComment(this.props.index);
	}

	render(){
		return (
			<div className='comment'>
				<div className='comment-user'>
					<span className='comment-username'>{this.props.comment.username}：</span>
				</div>
				<p dangerouslySetInnerHTML={{__html:this._replaceCodeContent(this.props.comment.content)}}></p>
				<span className='comment-createdtime'>
          {this.state.duringTime}
        </span>
				<span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
					删除
				</span>
			</div>
		)
	}
}

export default Comment