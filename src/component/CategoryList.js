import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux'
import { loadAllCategories } from '../actions/CategoryAction';
import { getAll } from '../apis/CategoriaApi';

class CategoryList extends Component {

    state = {
        category: {},
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
        const { categories } = this.props;
        console.log('MINHAS CATEGORIAS REDER: ', categories.items);
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Lista de Categorias</CardTitle>
                        <CardSubtitle>Selecione a Categoria Desejavel</CardSubtitle>

                        <ListGroup style={{paddingTop : 20}}>
                            { categories.items.map( (elementos) => (
                                <ListGroupItem key={elementos.name} >{ elementos.name }</ListGroupItem>
                            ))}
                        </ListGroup>
                    </CardBody>
                </Card>

            </div>
        );
    }
}

const mapStateToProps = ({ category }) => {
    console.log('mapStateToProps: ', category);
    return {
        categories: category
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