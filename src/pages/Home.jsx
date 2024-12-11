const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Bienvenido a FinEdu App</h1>
        <h3 className="text-xl font-bold text-blue-600 mb-4">La App #1 de Educación Financiera</h3>
        <p className="text-gray-700 mb-6">Explora nuestras funcionalidades para mejorar tus finanzas.</p>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Comenzar Tutoriales
          </button>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
            Simulación de Inversiones
          </button>
          <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">
            Ver Recompensas
          </button>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
            Configurar Metas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;