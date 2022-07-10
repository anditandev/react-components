import { useState, memo } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPickerView, StaticDatePicker } from '@mui/x-date-pickers';
import { DateAdapter } from './CustomDateAdapter';
import { Button, DialogActions } from '@mui/material';

interface Props{
    currentDateValue: Date | undefined;
    isPickerOpen: boolean;
    closePicker: (date?:Date) => void;
}

interface ActionBarProps {
    handleAccept: () => void;
    handleCancel: () => void;
}

const CustomActionBar = (props: ActionBarProps) => {
    const { handleAccept, handleCancel } = props;

    return (
      <DialogActions>
        <Button
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          onClick={handleAccept}
        >
          OK
        </Button>
      </DialogActions>
    )
}

/**
 * Note:
 * - Heavily modified css
 * - Using reduceAnimations will break the calendar header
 * - TODO: While changing date format for 'monthAndYear'
 * works in this case and will only affect the CalendarPicker component,
 * it might break in the future(expecting mui date-picker to expose
 * header component)
 */

const CalendarPicker = (props:Props) => {
    const [dateValue, setDateValue] = useState(props.currentDateValue);
    const [currentCalendarView, setCurrentCalendarView] = useState<CalendarPickerView>('day')

    const handleAccept = () => props.closePicker(dateValue);
    const handleCancel = () => {
      props.closePicker();
      // Reset date on cancel button press
      onDateChange(props.currentDateValue !== undefined ? props.currentDateValue : new Date());
    };

    const handleViewChange = (view:CalendarPickerView) => setCurrentCalendarView(view);
    const onDateChange = (value:any) => setDateValue(value);

    const handleLeftArrowButton = (e:any) => {
      const currentYear = dateValue !== undefined ? dateValue : new Date();
      const lastYear = currentYear.setFullYear(currentYear.getFullYear() - 1);
      setDateValue(new Date(lastYear));
    };

    const handleRightArrowButton = (e:any) => {
      const currentDate = dateValue !== undefined ? dateValue : new Date();
      const nextYear = currentDate.setFullYear(currentDate.getFullYear() + 1);
      setDateValue(new Date(nextYear));
    };

    return (
        <div className={`picker ${props.isPickerOpen ? 'visible' : ''}`}>
            <LocalizationProvider 
                dateAdapter={DateAdapter}
                dateFormats={{
                  monthAndYear: currentCalendarView === 'year' 
                  ? 'yyyy' 
                  : 'MMMM yyyy'
                }}>
                <StaticDatePicker
                    displayStaticWrapperAs='mobile'
                    value={dateValue}
                    openTo='day'
                    components={{
                        SwitchViewButton:() => <></>,
                        ActionBar:() => CustomActionBar(
                          {
                            handleAccept, handleCancel
                          }
                        ),
                    }}
                    componentsProps={
                      currentCalendarView === 'year' 
                      ? {
                          leftArrowButton:{
                            onClick:handleLeftArrowButton
                          },
                          rightArrowButton:{
                            onClick:handleRightArrowButton
                          }
                      } 
                      : undefined
                    }
                    onChange={onDateChange}
                    onViewChange={handleViewChange}
                    toolbarTitle= 'Text'
                    toolbarFormat= 'MMM, yyyy'
                    showToolbar
                    showDaysOutsideCurrentMonth
                    autoFocus
                    renderInput={() => <></>}
                />
            </LocalizationProvider>
        </div>
    )
}

const equalValue = (prevValue:Props, nextValue:Props) => {
	return prevValue.isPickerOpen === nextValue.isPickerOpen;
}

export default memo(CalendarPicker,equalValue);