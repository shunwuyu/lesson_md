import styles from './index.less';
import { Link, NavLink } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <NavLink to="/" activeClassName="selected">Index</NavLink>
      <Link to="/about">About</Link> 
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
