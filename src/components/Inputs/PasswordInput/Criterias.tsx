import '../style.scss';
import Checkmark from '../../Icons/Checkmark';
import { PasswordCriteriaType } from '../../../types';

interface Props{
    criterias: PasswordCriteriaType[];
    isCriteriaShown: boolean;
}

const Criterias = (props: Props) => {
    return (
        <div className={`criteriaContainer ${props.isCriteriaShown ? 'visible' : ''}`}>
            {
                props.criterias.map((item) => {
                    return (
                        <div key={item.id}>
                            <Checkmark isSatisfied={item.isSatisfied} />
                            <div className='textContainer'>
                                {item.desc}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Criterias;