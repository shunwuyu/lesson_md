import React from "react";
import Header from "./Header";
import Results from "./Results";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      loading: true
    };
  }

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = () => {
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/search?q=hops&type=beer`)
      .then(data => data.json())
      .then(data => {
        const beers = data.data || [];
        // console.log(beers);
        this.setState({ beers: beers, loading: false });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Header siteName="Beer me!" />
        <Results 
          beers={this.state.beers}
          loading={this.state.loading} />
      </div>
    )
  }
}

export default Main;