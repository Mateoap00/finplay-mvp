import { useState } from 'react';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');

  const handleAddGoal = () => {
    if (goalName && goalAmount) {
      setGoals([...goals, { name: goalName, amount: goalAmount }]);
      setGoalName('');
      setGoalAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Metas Financieras</h1>
        <p className="text-gray-700 mb-6 text-center">Configura y sigue tus metas financieras personalizadas.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Agregar Nueva Meta</h2>
          <input
            type="text"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Nombre de la meta"
          />
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Monto de la meta"
          />
          <button
            onClick={handleAddGoal}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Agregar Meta
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Tus Metas</h2>
          {goals.length === 0 ? (
            <p className="text-gray-600">No tienes metas financieras aún.</p>
          ) : (
            <ul className="list-disc list-inside space-y-2">
              {goals.map((goal, index) => (
                <li key={index} className="text-gray-700">
                  {goal.name}: ${goal.amount}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Goals;