import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post){
      return <div>Loading...</div>;
    }
    return (
      <div>
      <Link to="/">Back To Post</Link>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id],
});


export default connect(mapStateToProps, {fetchPost} )(PostsShow);
