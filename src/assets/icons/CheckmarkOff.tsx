import { memo } from 'react';

interface Props{
    size: string;
    color: string;
}

const CheckmarkOff = (props:Props) => {
    const size = props.size
    const color = props.color

    return (
        <div className='checkmarkOff'>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.91016 3.99973L4.63743 7.18155L10.5465 1.27246" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

const equalValue = (prevValue:Props, nextValue:Props) => {
	return prevValue.size === nextValue.size &&
    prevValue.color === nextValue.color
}

export default memo(CheckmarkOff, equalValue)