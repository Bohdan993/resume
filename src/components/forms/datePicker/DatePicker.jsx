import DP from 'react-datepicker';
import {useState} from 'react';

import './datePicker.scss';

export const DatePicker = (props) => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <DP
            {...props}
      /> 
    )
}