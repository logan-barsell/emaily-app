import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    let navigate = useNavigate();

    useEffect(() => {
      if (!props.auth) {
        navigate('/');
        console.log(props)
      }
    }, [props.auth, navigate]);

    return (
      <ChildComponent {...props} />
    );

  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};