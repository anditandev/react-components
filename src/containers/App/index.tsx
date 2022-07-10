import { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import MainForm from '../../components/Form';
import './style.scss';

export default class App extends PureComponent {

    render() {
        return (
            <Container className={'p-3'} fluid>
                <MainForm />
            </Container>
        )
    }
}