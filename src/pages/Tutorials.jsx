const Tutorials = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Tutoriales Interactivos</h1>
        <p className="text-gray-700 mb-6 text-center">Aprende a presupuestar con nuestros tutoriales.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Tutorial Básico: Cómo Crear un Presupuesto</h2>
          <p className="text-gray-600 mb-4">Sigue los pasos a continuación para aprender a crear un presupuesto básico.</p>
          
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-gray-700">Paso 1: Anota todos tus ingresos mensuales.</li>
            <li className="text-gray-700">Paso 2: Anota todos tus gastos mensuales.</li>
            <li className="text-gray-700">Paso 3: Resta tus gastos de tus ingresos para ver cuánto puedes ahorrar.</li>
            <li className="text-gray-700">Paso 4: Ajusta tus gastos para aumentar tus ahorros.</li>
          </ol>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Comenzar Otro Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;