import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailsComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: 0
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
          return (
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                  leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                  />
          );
        }

        const DishWithId = ({match}) => {
          return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                        addComment={this.props.addComment}
                        />
          );
        };

        return (
          <div className="body">
            <Header />
            <div className="page-content">
              <Switch>
                <Route path='/home' component={HomePage} />
                // About Us page
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/home' />
              </Switch>
            </div>
            <Footer />
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));