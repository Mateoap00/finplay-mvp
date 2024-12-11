import { useState } from 'react';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [reminderText, setReminderText] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  const handleAddReminder = () => {
    if (reminderText && reminderDate) {
      setReminders([...reminders, { text: reminderText, date: reminderDate }]);
      setReminderText('');
      setReminderDate('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Recordatorios</h1>
        <p className="text-gray-700 mb-6 text-center">Recibe notificaciones para mantenerte comprometido con tus metas.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Agregar Nuevo Recordatorio</h2>
          <input
            type="text"
            value={reminderText}
            onChange={(e) => setReminderText(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Texto del recordatorio"
          />
          <input
            type="date"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleAddReminder}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Agregar Recordatorio
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Tus Recordatorios</h2>
          {reminders.length === 0 ? (
            <p className="text-gray-600">No tienes recordatorios aún.</p>
          ) : (
            <ul className="list-disc list-inside space-y-2">
              {reminders.map((reminder, index) => (
                <li key={index} className="text-gray-700">
                  {reminder.text} - {new Date(reminder.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reminders;