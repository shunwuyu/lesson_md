import { NavLink } from 'umi';
import './about.less';

export default function AboutPage() {
  return (
    <div>
      <NavLink to="/" activeClassName="selected">Index</NavLink>
      <NavLink to="/about" activeClassName="selected">About</NavLink>
      <h1 >Page About</h1>
    </div>
  );
}
