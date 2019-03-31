import * as React from "react";
import {connect} from "react-redux";
import {Alert} from "react-bootstrap";

class WarningComponent extends React.Component{
    render() {
        return(
          <Alert variant={"light"}>
              {this.props.warning}
          </Alert>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        warning: state.message
    };
};

export default connect(mapStateToProps)(WarningComponent);
