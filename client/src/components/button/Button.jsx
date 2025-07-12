import classes from './button.module.css';

export default function Button({ label, onClick }) {
    return (
        <div className={classes.button}>
            <button onClick={onClick}>
                {label}
            </button>
        </div>
        
    );
}
