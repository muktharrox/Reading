import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup, Container, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { loadAllPosts } from '../actions/PostAction';
import { getAll } from '../apis/PostApi';

class PostList extends Component {

    state = {
        posts: {
            itens: []
        },
    };

    componentDidMount() {
        const { fetchPosts } = this.props;
        getAll()
            .then( (posts) => {
                console.log('Todos os Posts', posts);
                fetchPosts(posts)
            })
            .catch( (err) => console.log('Erro: ', err))
    };

    render() {
        const { posts } = this.props;

        return (
            <Container className="align-content-center">
                    <Row>
                        <Button>ADD MORE POSTS</Button>
                    </Row>
                    <Row className="text-center">
                        <div className="col-md-2 text-center"></div>
                        <div className="col-md-8 text-center">

                            { posts.itens !== undefined ? posts.itens.map( (elementos) => (
                            <Card key={elementos.id}>
                                <CardBody>
                                    <CardTitle><b>{ elementos.title }</b></CardTitle>
                                    <CardSubtitle  style={{ paddingBottom: '10px' }}>Categoria: { elementos.category }</CardSubtitle>
                                    <CardSubtitle  style={{ paddingBottom: '10px' }}>author: { elementos.author }</CardSubtitle>
                                    <p> { elementos.body } </p>
                                    <Button>Vote Score</Button>
                                </CardBody>
                            </Card>
                            )) : ''}
                        </div>
                        <div className="col-md-2 text-center"></div>
                    </Row>


            </Container>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    console.log('mapStateToProps: ', posts);
    return {
        posts: posts
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: (data) => dispatch(loadAllPosts(data))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);