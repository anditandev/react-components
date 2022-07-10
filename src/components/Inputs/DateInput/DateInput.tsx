import { MouseEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './style.scss';
import CalendarPicker from './CalendarPicker';
import { ClickAwayListener } from '@mui/material';

const DateInput = () => {
    const [isPickerOpen, setPickerOpen] = useState(false);
    const [dateValue, setDateValue] = useState<Date | undefined>(undefined);

    const handleClick = (e:MouseEvent<HTMLInputElement>) => {
      setPickerOpen(isPickerOpen => !isPickerOpen)
      e.currentTarget.blur()
    };

    const handleBlur = () => setPickerOpen(false);
    const onPickerClose = (date?:Date) => {
      handleBlur()
      if (date !== undefined)
          setDateValue(date)
    };

    const handleKeyDown = (e:any) => {
      e.preventDefault()
    };

    const dateString = dateValue
    ? dateValue.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) 
    : undefined;

    return (
        <ClickAwayListener onClickAway={handleBlur} >
          <div className='input'>
              <Form.Control 
                className={`date ${isPickerOpen ? 'pickerOpen' : ''}`} 
                type={'text'}
                placeholder='mm/dd/yyyy' 
                onClick={handleClick}
                onKeyDown={handleKeyDown} 
                value={dateString} />
              <Form.Label>Birthday</Form.Label>
              <CalendarPicker 
                currentDateValue={dateValue}
                isPickerOpen={isPickerOpen}
                closePicker={onPickerClose}
              />
          </div>
        </ClickAwayListener>
    );
}

export default DateInput;