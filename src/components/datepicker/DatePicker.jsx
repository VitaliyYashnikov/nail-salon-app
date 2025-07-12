import classes from './datepicker.module.css'
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({ selectedDate, onChange }) {
    return (<div className={classes.datepicker}>
        <ReactDatePicker
            selected={selectedDate}
            onChange={onChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Выберите дату"
        />
    </div>
        
    );
}
