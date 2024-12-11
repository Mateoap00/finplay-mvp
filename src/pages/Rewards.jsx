const Rewards = () => {
  const badges = [
    { id: 1, name: 'Ahorrista Novato', description: 'Por ahorrar tu primer $100', color: 'bg-blue-500' },
    { id: 2, name: 'Inversor Principiante', description: 'Por realizar tu primera inversión', color: 'bg-green-500' },
    { id: 3, name: 'Meta Alcanzada', description: 'Por alcanzar tu primera meta financiera', color: 'bg-yellow-500' },
    { id: 4, name: 'Planificador Experto', description: 'Por crear un presupuesto mensual', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Sistema de Recompensas</h1>
        <p className="text-gray-700 mb-6 text-center">Gana insignias y puntos por tus logros financieros.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {badges.map((badge) => (
            <div key={badge.id} className={`p-4 rounded-lg shadow-inner ${badge.color} text-white`}>
              <h2 className="text-xl font-semibold mb-2">{badge.name}</h2>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;