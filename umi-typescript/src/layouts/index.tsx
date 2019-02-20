import * as React from "react";
import withRouter from "umi/withRouter"
import { connect } from "dva"
import styles from './index.css';
import Login from "../components/Login"

interface IState {
  loading: boolean,
}
class BasicLayout extends React.Component<IState>{
  public render() {
    return (
      <div className="contain" >
        <Login />
      </div>
    )
  }
}
// export default BasicLayout;
function mapStateToProps(state) {
  const { auth, logoImg, navtive } = state.admin
  return { auth, logoImg, navtive }
}
const mapState = connect(mapStateToProps)(BasicLayout)
export default withRouter(mapState)
