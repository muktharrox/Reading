import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import CategoryList from './component/CategoryList';
import PostList from './component/PostList'


class App extends Component {
  render() {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">Project Reading</h1>
                <p className="lead">O melhor sistema de postagem do mundo.</p>
                <hr className="my-2" />
            </Jumbotron>

            <CategoryList></CategoryList>
            <PostList></PostList>

        </div>
    );
  }
}

export default App;
