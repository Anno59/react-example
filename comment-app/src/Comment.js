/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';

class Comment extends Component{
    static defaultProps = {
        comment:{
            username:'',
            content:''
        }
    }

    constructor(){
        super();
         this.state = {
             date : ''
         }
    }

    _refreshCommentTime(){
        this._timer = setInterval(()=>{
            this._formatDateTime();
        },1000)
    }

    _formatDateTime(){
        let commentDate = this.props.comment.date;
        let intervalTime = parseInt((+new Date() - commentDate) / 1000);
        let unit;
        if(intervalTime < 60){
            unit = '秒前'
        }else if(intervalTime >= 60){
            intervalTime  = parseInt(intervalTime / 60);
            unit = '分前'
        }
        // console.log(intervalTime)
        // console.log(unit)
        this.setState({
            date : `${intervalTime}${unit}`
        })
    }

    _formatContentCode(content){
        return content.replace(/`([\s|\S]*)`/g,'<code>$1</code>');;
        // this.setState({
        //     content:content
        // })
    }

    componentWillMount(){
        this._refreshCommentTime();
    }

    componentWillUnmount(){
        clearInterval(this._timer)
    }

    render(){
        const {comment} = this.props; //解构
        return(
          <div className='comment'>
              <div className='comment-user'>
                  <span>{comment.username} </span>：
              </div>
              <p dangerouslySetInnerHTML={{__html: this._formatContentCode(comment.content)}}></p>
              <span className='comment-createdtime'>
                  {this.state.date}
              </span>
              <span index={this.props.index} className='comment-delete' onClick={this.props.handleDelete} >
                  删除
              </span>
          </div>
        )
    }
}

export default Comment;