import * as React from "react";
import styles from './index.css';
import Login from "../components/Login"
export type BasicLayoutComponent<P> = React.SFC<P>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = props => {
  return (
    <div className={styles.normal}>
      <Login/>
    </div>
  );
};

export default BasicLayout;
