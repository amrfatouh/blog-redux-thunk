import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div className="item">
          <i class="big user middle aligned circle icon"></i>
          <div className="content" key={post.id}>
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui segment">
        <div className="ui large header aligned centered">Blog Posts</div>
        <div className="ui relaxed divided list">{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
