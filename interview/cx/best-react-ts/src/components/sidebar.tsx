import * as React from 'react';
const classNames = require("./sidebar.css");

interface Props {
  isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
  display: props.isVisible ? "block" : "none"
});

export const SidebarComponent: React.FC<Props> = props => (
  <div id="mySidenav" className={classNames.sidenav}  style={divStyle(props)}>
    <h1>Cool Scfi movies</h1>
    <ul>
      <li>
        <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
      </li>
      <li>
        <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
      </li>
      <li>
        <a href="https://www.imdb.com/title/tt0062622/">
          2001: a space odyssey
        </a>
      </li>
    </ul>
  </div>
)