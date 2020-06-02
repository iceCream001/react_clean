import React, { Component } from 'react';
import { connect } from "react-redux";

import loadpost from "../action/postAction";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log(this.props)
    }
    componentDidMount(){
        // this.props.dispatch(loadpost);
    }
    render() {
        console.log(this.props.post.list)
        return (
        <div>
            {
            this.props.post.list.map((v,i)=>{
            return <li key={i}>{v.title}</li>
            })
            }
        </div>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    //state中存储reducer初始化数据，使用reducer的key取值
    return {
        post:state.post
    }
}
const mapDispacthToProps = (dispatch)=>{
    //state中存储reducer初始化数据，使用reducer的key取值
    return {
        loadpost:()=>{dispatch(loadpost)}
    }
}
//通过connect连接组件和store的数据
export default connect(mapStateToProps,mapDispacthToProps)(Home);