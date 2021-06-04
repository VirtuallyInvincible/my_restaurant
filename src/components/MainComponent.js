import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
          <div>
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="/">Shai's Restaurant</NavbarBrand>
              </div>
            </Navbar>
            <Menu dishes={this.state.dishes} />
          </div>
        );
    }
}

export default Main;