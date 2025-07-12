

export default function Form({ ftype, fplaceholder, value, onChange }){
    
    return(
        <form>
            <input type={ftype} placeholder={fplaceholder} value={value}
                onChange={onChange} /><br/>
        </form>
    )
}