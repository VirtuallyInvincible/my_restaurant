import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name:'Hummus with Mushrooms',
                    image: 'assets/images/Hummus_with_Mushrooms.jpg',
                    category: 'Main Course',
                    label:'Hot',
                    price:'5',
                    description:'A hot plate of hummus with sliced mushrooms.'
                },
                {
                    id: 1,
                    name:'Hummus Suhilla',
                    image: 'assets/images/Hummus_Suhilla.jpg',
                    category: 'Main Course',
                    label:'Hot',
                    price:'6',
                    description:'A hot plate of hummus suhilla'
                },
                {
                    id: 2,
                    name:'Hummus Complett',
                    image: 'assets/images/Hummus_Complett.jpg',
                    category: 'Main Course',
                    label:'Hot',
                    price:'6',
                    description:'A hot plate of hummus complett'
                },
                {
                    id: 3,
                    name:'Hummus with Ful',
                    image: 'assets/images/Hummus_with_Ful.jpg',
                    category: 'Main Course',
                    label:'Hot',
                    price:'5',
                    description:'A hot plate of hummus with ful (broad beans)'
                }
            ]
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                    <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                {menu}
              </Media>
            </div>
          </div>
        )
    }
}

export default Menu;