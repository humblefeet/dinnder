import React from 'react'
import {Carousel} from 'react-bootstrap'
import './welcome.css'

class WelcomeCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
            index: 0,
            direction: null,
        };
        }
    
        handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
        }
    
        render() {
        const { index, direction } = this.state;
    
        return (
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            interval={4000}
            >
            <Carousel.Item>
                <img
                fluid
                className="d-block w-100 "
                src="https://i.imgur.com/souVItn.jpg?1"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                fluid
                className="d-block w-100 "
                src="https://i.imgur.com/48WhTpQ.jpg?1"
                alt="Third slide"
                />
    
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                fluid
                className="d-block w-100 "
                src="https://i.imgur.com/K8xpLME.jpg?2"
                alt="Third slide"
                />
    
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        );
        }
    }
    

export default WelcomeCarousel