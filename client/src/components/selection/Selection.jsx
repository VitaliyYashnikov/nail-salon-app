
export default function Selection({ value, onChange }) {
    return (
        <form>
            <select name="service" value={value} onChange={onChange}>
                <option value="">בחר שירות</option>
                <option value="Маникюр ">Маникюр</option>
                <option value="Маникюр джeль лак">Маникюр джель лак</option>
                <option value="Педикюр">Педикюр</option>
                <option value="Наращивание">Наращивание</option>
            </select>
        </form>
        
    );
}
