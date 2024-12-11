import { useState } from 'react';

const Investments = () => {
  const [investment, setInvestment] = useState('');
  const [returns, setReturns] = useState(null);

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const simulateInvestment = () => {
    const investmentAmount = parseFloat(investment);
    if (!isNaN(investmentAmount)) {
      const simulatedReturns = investmentAmount * 1.1; // Simulate a 10% return
      setReturns(simulatedReturns.toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Simulación de Inversiones</h1>
        <p className="text-gray-700 mb-6 text-center">Simula inversiones básicas y aprende cómo funcionan.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Simula tu Inversión</h2>
          <p className="text-gray-600 mb-4">Ingresa un monto para simular una inversión con un retorno del 10%.</p>
          
          <input
            type="number"
            value={investment}
            onChange={handleInvestmentChange}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Monto de inversión"
          />
          <button
            onClick={simulateInvestment}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Simular Inversión
          </button>
          
          {returns && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
              <p>Retorno Simulado: ${returns}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investments;