import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
            <h1 className="text-4xl font-bold text-white mb-4">404 - Página no encontrada</h1>
            <p className="text-lg text-gray-400 mb-8">Lo sentimos, la página que buscas no existe o fue movida.</p>
            <button 
                onClick={() => navigate(-1)} 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Regresar
            </button>
        </div>
    );
};

export default NotFoundPage;
