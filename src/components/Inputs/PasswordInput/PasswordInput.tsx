import { ChangeEvent, FocusEvent, useState } from 'react';
import '../style.scss';
import Form from 'react-bootstrap/Form';
import { getPasswordCriterias, testPasswordCriteria } from '../../../helpers/passwordCriteriaHandler';
import { PasswordCriteriaType } from '../../../types';
import Criterias from './Criterias';

const PasswordInput = () => {
    const [criterias, setCriterias] = useState(getPasswordCriterias())
    const [isCriteriaShown, setIsCriteriaShown] = useState(false)
    
    const focusHandler = (e:FocusEvent<HTMLInputElement>) => {
        if (!isCriteriaShown)
            setIsCriteriaShown(true)
    }
    
    const blurHandler = (e:FocusEvent<HTMLInputElement>) => {
        if (isCriteriaShown)
            setIsCriteriaShown(false)
    }

    const handleKeyDown = (e:any) => {
        // Naive approach on preventing space button input
        if (e.key === ' ')
            e.preventDefault()
    }
    
    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value

        // Prevent unncessary re-render if prev boolean was the same as current boolean
        let updateState = false

        const newCriteria = [...criterias].reduce((prevArr:PasswordCriteriaType[],item:PasswordCriteriaType) => {
            const newItem = {...item};
            // TODO: Research whether passing sensitive string to imported function
            // expose any security threat in web security from client side
            const result = testPasswordCriteria(text,item.desc);
            if (result && !item.isSatisfied) {
                updateState = true;
                newItem.isSatisfied = true;
            } else if (!result && item.isSatisfied) {
                updateState = true;
                newItem.isSatisfied = false;
            }
            prevArr.push(newItem);

            return prevArr;
        }, [])

        if (updateState)
            setCriterias(newCriteria)
    }

    return (
        <>
            <div className='input'>
                <Form.Control 
                    id='password' 
                    type='password' 
                    placeholder='Password' 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    onBlur={blurHandler}
                    onKeyDown={handleKeyDown} />
                <Form.Label htmlFor='password'>
                    Password
                </Form.Label>
            </div>
            <Criterias
                criterias={criterias}
                isCriteriaShown={isCriteriaShown}
            />
        </>
    )
}

export default PasswordInput