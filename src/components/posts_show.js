import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Post Show!
      </div>
    );
  }
}

const mapStateToProps = ({posts}, ownProps) => ({
  post: posts[ownProps.match.props.id],
});

export default connect(mapStateToProps, {fetchPost})(PostsShow);
