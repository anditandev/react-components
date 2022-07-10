import Form from 'react-bootstrap/Form';
import './style.css';
import PasswordInput from '../Inputs/PasswordInput/PasswordInput';
import DateInput from '../Inputs/DateInput/DateInput';

const MainForm = () => {

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        // Handle submit here 
        event.preventDefault();
    }

    return (
        <Form.Group className={'form-group'} onSubmit={handleSubmit}>
            <PasswordInput />
            <DateInput />
        </Form.Group>
    )
}

export default MainForm