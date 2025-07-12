import { useState } from "react";
import Form from "../form/Form";
import Selection from "../selection/Selection";
import DatePicker from "../datepicker/DatePicker";
import Button from "../button/Button";

export default function Report() {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);

    const handleSubmit = async () => {
        const data = {
            name,
            service,
            date_from: dateFrom ? dateFrom.toISOString().slice(0, 10) : null,
            date_to: dateTo ? dateTo.toISOString().slice(0, 10) : null
        };

        try {
            const response = await fetch("http://localhost:5000/api/report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "report.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Ошибка при получении отчета:", error);
            alert("Ошибка при получении отчета.");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "2em" }}>
            <h2>Формирование отчета</h2>

            <Form
                ftype="text"
                fplaceholder="Имя клиента"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Selection value={service} onChange={(e) => setService(e.target.value)} />

            <p>Дата от:</p>
            <DatePicker selectedDate={dateFrom} onChange={(date) => setDateFrom(date)} />

            <p>Дата до:</p>
            <DatePicker selectedDate={dateTo} onChange={(date) => setDateTo(date)} />

            <br />
            <Button label="Сформировать отчёт" onClick={handleSubmit} />
        </div>
    );
}