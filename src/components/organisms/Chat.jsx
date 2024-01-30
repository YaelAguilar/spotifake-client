import { useState, useEffect, useRef } from 'react';

function Chat() {
    const [ws, setWs] = useState(null);
    const [mensajes, setMensajes] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const [messageStatus, setMessageStatus] = useState({});

    const lastMessageId = useRef(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');
        ws.onopen = () => console.log('Conectado al servidor WebSocket');
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.message) {
                setMensajes(prevMensajes => [...prevMensajes, data]);
                if (data.id === lastMessageId.current) {
                    setMessageStatus(prevStatus => ({ ...prevStatus, [data.id]: 'Enviado' }));
                }
            } else if (data.confirmation) {
                setMessageStatus(prevStatus => ({ ...prevStatus, [data.confirmation]: 'Entregado' }));
            }
        };
        ws.onclose = () => console.log('Desconectado del servidor WebSocket');
        
        setWs(ws);
        return () => ws.close();
    }, []);

    useEffect(() => {
        const pollForMessageConfirmations = async () => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                try {
                    const response = await fetch('http://localhost:8080/chat/poll');
                    const confirmation = await response.text();
                    ws.send(JSON.stringify({ confirmation }));
                } catch (error) {
                    console.error('Error al realizar Long Polling:', error);
                }
            }
        };
        pollForMessageConfirmations();
    }, [ws]);

    const enviarMensaje = () => {
        if (ws && mensaje) {
            const messageId = generateUniqueMessageId();
            ws.send(JSON.stringify({ message: mensaje, id: messageId }));
            setMessageStatus(prevStatus => ({ ...prevStatus, [messageId]: 'Enviando...' }));
            lastMessageId.current = messageId;
            setMensaje("");
        }
    };

    return (
        <div className="chat bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
            <div className="mensajes mb-4 h-64 overflow-auto">
                {mensajes.map((msg, idx) => (
                    <div key={idx} className="bg-gray-700 p-2 my-2 rounded">
                        <p>{msg.content}</p>
                        <small>{messageStatus[msg.id]}</small>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input 
                    type="text" 
                    value={mensaje} 
                    onChange={(e) => setMensaje(e.target.value)} 
                    placeholder="Escribe un mensaje..."
                    className="flex-1 p-2 rounded-l bg-gray-900 border-2 border-r-0 border-gray-700 placeholder-gray-400"
                />
                <button 
                    onClick={enviarMensaje}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}

function generateUniqueMessageId() {
    return 'messageId_' + new Date().getTime();
}

export default Chat;
