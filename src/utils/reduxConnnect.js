import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export function connectAutoDispatch(mapStateToProps, actions, ...args) {
  return connect(
    mapStateToProps,
    dispatch => bindActionCreators(actions, dispatch),
    ...args
  );
}

export function connectAutoDispatchWithRef(mapStateToProps: any, actions) {
  return connect(
    mapStateToProps,
    dispatch => bindActionCreators(actions, dispatch),
    null,
    {
      withRef: true
    }
  );
}
