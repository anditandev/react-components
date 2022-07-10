import { memo } from 'react';

interface Props{
    isSatisfied: boolean;
}

const CheckmarkOff = () => {
    return (
        <div className='checkmarkOff'>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.91016 3.99973L4.63743 7.18155L10.5465 1.27246" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}

const CheckmarkOn = () => {
    return (
        <svg width={'20'} height={'20'} viewBox={`0 0 20 20`} fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z' fill={'#00D1FF'}/>
        </svg>
    );
}

const Checkmark = (props:Props) => {
    return (
        <div className={'vector'}>
            {
                props.isSatisfied 
                ? <CheckmarkOn/> 
                : <CheckmarkOff />
            }
        </div>
    );
}

const equalValue = (prevValue:Props, nextValue:Props) => {
	return prevValue.isSatisfied === nextValue.isSatisfied
};

export default memo(Checkmark, equalValue);