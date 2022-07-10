// https://github.com/mui/mui-x/issues/4605
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Prevent Uppercase by default
class CustomString extends String {
  charAt(_: number): any {
    return {
      toUpperCase: () => this.valueOf()
    };
  }
}

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const customWeekDays = weekDays.map((day) => new CustomString(day) as string);

export class DateAdapter extends AdapterDateFns {
  getWeekdays = (): string[] => customWeekDays;
}