import React from 'react';
import Nav from "../Nav/nav.js";
import Container from "../Container/container.js";
import data from "../../data.json";
import Square from "../Square/square.js"


class Game extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        data
    };

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps) {


    }

    render() {

        return (
            <div>
                <Nav score={this.state.score} />
                <Container>
                    {this.state.data.map(square => (
                        <Square
                            image={sqaure.image}
                            id={sqaure.id}
                            key={sqaure.id}
                            clicked={sqaure.clicked} />
                    ))}
                </Container>
            </div>
        )
    }
}

export default Game;
