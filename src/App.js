import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import CategoryList from './component/CategoryList';


class App extends Component {
  render() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Project Reading</h1>
                <p className="lead">O melhor sistema de postagem do mundo.</p>
                <hr className="my-2" />
            </Jumbotron>

            <CategoryList></CategoryList>
        </div>
    );
  }
}

export default App;
