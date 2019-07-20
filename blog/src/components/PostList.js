import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPostsUsers } from '../actions/';
import User from './User';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsUsers();
    }
    renderList() {
        return this.props.posts.map(post => {
           return (
               <div key={post.id}>
                 <p>{post.id}</p>
                 <p>{post.title}</p>
                 <p>{post.body}</p>
                 <User userId={post.userId} />
               </div>
           )
        })
    }
    render () {
        return (
            <div> {this.renderList()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {posts: state.posts};
}
export default connect(mapStateToProps, { fetchPostsUsers })(PostList);