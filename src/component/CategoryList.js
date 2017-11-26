import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup, Container, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { loadAllCategories } from '../actions/CategoryAction';
import { getAll } from '../apis/CategoriaApi';

class CategoryList extends Component {

    state = {
        category: {
            items: []
        },
    };

    componentDidMount() {
        const { fetchCategories } = this.props;
        getAll()
            .then( (category) => {
                fetchCategories(category)
            })
            .catch( (err) => console.log('Erro: ', err))
    };

    render() {
        const { category } = this.props;

        return (
            <Container className="align-content-center">
                <Row className="text-center">
                    <div className="col-md-4 text-center"></div>
                    <div className="col-md-4 text-center">
                        <Card>
                            <CardBody>
                                <CardTitle>Lista de Categorias</CardTitle>
                                <CardSubtitle>Selecione a Categoria Desejavel</CardSubtitle>

                                <ButtonGroup size="lg" style={{paddingTop : 20}}>
                                    { category.items !== undefined ? category.items.map( (elementos) => (
                                        <Button key={elementos.name} >{ elementos.name }</Button>
                                    )) : ''}
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center"></div>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({ category }) => {
    return {
        category: category
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: (data) => dispatch(loadAllCategories(data))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);