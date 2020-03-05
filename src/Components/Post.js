import React from 'react';
import { connect } from 'react-redux';
import { getPostAction } from '../Redux/actions';

function Post({ getPost }) {
  const handleClick = () => {
    getPost();
  };
  return (
    <div>
      GETTTING POST
      <button type="submit" onClick={handleClick}>GET POST</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('POST FROM STATE IS :::::', state);
  return {
    getPostSuccess: getPostAction()
  };
};

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(getPostAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
