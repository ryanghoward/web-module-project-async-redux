import React from "react";
import { connect } from "react-redux";

const Activities = (props) => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='activities'>
      <h2>You should: </h2>
      <div>
        <h3>{props.activity}</h3>
      </div>
      <div>
        <button onClick={refreshPage}>Not interested?</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps)(Activities);
