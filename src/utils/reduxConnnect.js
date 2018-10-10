import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export function connectAutoDispatch(mapStateToProps = {}, actions, ...rest) {
  return connect(
    mapStateToProps,
    dispath => bindActionCreators(actions, dispath),
    rest
  );
}
