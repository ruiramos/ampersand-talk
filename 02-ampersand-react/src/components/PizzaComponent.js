import React from 'react';

export default class PizzaComponent extends React.Component {
  render(){
    let nPizzas = Math.ceil(this.props.number / 2.5);
    return <p>Pizzas needed ({ nPizzas }): { this.renderPizzas(nPizzas) }</p>
  }

  renderPizzas(n){
    return Array.apply(null, {length: n}).map((_, i) =>
      <img key={i} src='http://dump.ruiramos.com/pizza.png' className="pizza-img" />
    )
  }
}

PizzaComponent.propTypes = { number: React.PropTypes.number };