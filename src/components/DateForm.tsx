import React, { useState} from 'react';

const DateTimeForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(''); // Almacena la fecha en formato 'YYYY-MM-DD'
  const [selectedTime, setSelectedTime] = useState<string>(''); // Almacena la hora en formato 'HH:MM'

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDate && selectedTime) {
      const fullDateTime = `${selectedDate}T${selectedTime}`; // Formato ISO 8601 para fácil manejo
      console.log('Fecha y Hora seleccionadas:', fullDateTime);
      // Aquí puedes enviar fullDateTime a tu backend, guardarlo en un estado superior, etc.
      alert(`Fecha y Hora seleccionadas: ${new Date(fullDateTime).toLocaleString()}`);
    } else {
      console.log('Por favor, selecciona una fecha y una hora.');
      alert('Por favor, selecciona una fecha y una hora.');
    }
  };

  return (
    <form className="max-w-sm w-full mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Añadir Fecha y Hora</h2>

      <div className="mb-5">
        <label htmlFor="dateInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Seleccionar Fecha:
        </label>
        <input
          type="date"
          id="dateInput"
          value={selectedDate}
          onChange={handleDateChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="timeInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Seleccionar Hora:
        </label>
        <input
          type="time"
          id="timeInput"
          value={selectedTime}
          onChange={handleTimeChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Guardar Fecha y Hora
      </button>
    </form>
  );
};

export default DateTimeForm;