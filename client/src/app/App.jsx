import Form from '../components/form/Form';
import Selection from '../components/selection/Selection';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import DatePicker from '../components/datepicker/DatePicker';
import Button from '../components/button/Button';
import Report from '../components/report/Report';
import { useState } from "react";

import classes from './app.module.css';

export default function App() {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async () => {
    const data = {
      name,
      amount,
      service,
      date: date?.toISOString().slice(0, 10) || null
    };

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log("Ответ сервера:", result);
      alert("Данные успешно отправлены!");
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке данных.");
    }
  };


    const forms = [{
      ftype: "text",
      fplaceholder: "имя"
    },
    {
      ftype: "number",
      fplaceholder: "сумма"
    }]
    return (
      <div className={classes.app}>
        <Header />

        <main>
          <Form ftype={forms[0].ftype} fplaceholder={forms[0].fplaceholder} value={name} onChange={(e) => setName(e.target.value)} />
          <Selection value={service} onChange={(e) => setService(e.target.value)} />
          <Form ftype={forms[1].ftype} fplaceholder={forms[1].fplaceholder} value={amount} onChange={(e) => setAmount(e.target.value)} />
          <DatePicker selectedDate={date} onChange={(date) => setDate(date)} />
          <Button label="Отправить" onClick={handleSubmit} />
        </main>
        
        <Report/>
        <Footer />
      </div>
    );
  }
