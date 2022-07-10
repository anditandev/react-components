import { memo } from 'react';
import CheckmarkOff from '../../assets/icons/CheckmarkOff';
import CheckmarkOn from '../../assets/icons/CheckmarkOn';

interface Props{
    isSatisfied: boolean
}

const Checkmark = (props:Props) => {
    const iconsize = '20';
    const onColor = '#00D1FF';
    const offColor = '#565656';

    return (
        <div className={'vector'}>
            {
                props.isSatisfied ? 
                <CheckmarkOn size={iconsize} color={onColor} /> : 
                <CheckmarkOff size={iconsize} color={offColor}/>
            }
        </div>
    )
}

const equalValue = (prevValue:Props, nextValue:Props) => {
	return prevValue.isSatisfied === nextValue.isSatisfied
}

export default memo(Checkmark, equalValue)