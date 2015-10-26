import React from 'react';

export default class BeerComponent extends React.Component {
  render(){
    let nBeers = Math.round(this.props.number * 1.75);
    return <p>Beers needed ({ nBeers }): { this.renderBeers(nBeers) }</p>
  }

  renderBeers(n){
    return Array.apply(null, {length: n}).map((_, i) =>
      <img key={i} src='http://dump.ruiramos.com/beer.jpg' className="beer-img" />
    )
  }
}

BeerComponent.propTypes = { number: React.PropTypes.number };