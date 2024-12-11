const Community = () => {
  const forums = [
    { id: 1, title: 'Presupuestos y Ahorro', description: 'Comparte y discute estrategias para presupuestar y ahorrar dinero.' },
    { id: 2, title: 'Inversiones', description: 'Habla sobre tus experiencias y consejos para invertir.' },
    { id: 3, title: 'Metas Financieras', description: 'Comparte tus metas financieras y recibe apoyo de la comunidad.' },
    { id: 4, title: 'Recompensas y Logros', description: 'Muestra tus logros y motiva a otros a alcanzar sus metas.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Comunidad</h1>
        <p className="text-gray-700 mb-6 text-center">Discute sobre finanzas con otros usuarios en nuestros foros.</p>
        
        <div className="grid grid-cols-1 gap-4">
          {forums.map((forum) => (
            <div key={forum.id} className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{forum.title}</h2>
              <p className="text-gray-600">{forum.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;