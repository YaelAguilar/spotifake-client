import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const MusicPlayer = () => {
    const [roomName, setRoomName] = useState('');
    const [currentSong, setCurrentSong] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const audioPlayer = useRef(null);

    const albumCovers = {
        'Lil Xan-Betrayed.mp3': 'public/lilxan-cover.jpg',
        'Taylor Swift-Dancing With Our Hands Tied.mp3': 'public/taylorswift-cover.jpg',
        'Billie Eilish-Oxytocin.mp3': 'public/billieeilish-cover.jpg',
        'Joji-Die For You.mp3': 'public/joji-cover.jpg',
        'Lil Peep-16 Lines.mp3': 'public/lilpeep-cover.jpg',
        'Paramore-Still Into You.mp3': 'public/paramore-cover.jpg',
    };

    useEffect(() => {
        socket.on('trackChanged', async (track) => {
            const newTrack = `public/${track}`;
            setCurrentSong(newTrack);
            if (audioPlayer.current) {
                try {
                    await audioPlayer.current.pause();
                    audioPlayer.current.load();
                    await audioPlayer.current.play();
                } catch(error) {
                    console.error('Error playing track:', error);
                }
            }
        });

        socket.on('playsong', (time) => {
            if (audioPlayer.current) {
                audioPlayer.current.currentTime = time;
                audioPlayer.current.play();
            }
        });

        socket.on('pausesong', (time) => {
            if (audioPlayer.current) {
                audioPlayer.current.currentTime = time;
                audioPlayer.current.pause();
            }
        });

        return () => {
            socket.off('trackChanged');
            socket.off('playsong');
            socket.off('pausesong');
        };
    }, []);

    const handleRoomSubmit = (e) => {
        e.preventDefault();
        const room = e.target.roomName.value.trim();
        if (room) {
            setRoomName(room);
            socket.emit('subscribe', room);
            setIsSubscribed(true);
        }
    };

    const handleLeaveRoom = () => {
        if (roomName) {
            socket.emit("unsubscribe", roomName);
            setRoomName('');
            setCurrentSong('');
            setIsSubscribed(false);
        }
    };

    const handleTrackChange = (trackName) => {
        setCurrentSong(`public/${trackName}`);
        socket.emit('changeTrack', { track: trackName, room: roomName });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-6xl font-bold mb-8">Sockets Music Player</h1>
            {!isSubscribed ? (
                <form onSubmit={handleRoomSubmit} className="mb-4">
                    <input
                        type="text"
                        name="roomName"
                        placeholder="Enter Room Name"
                        className="text-black p-2"
                    />
                    <button
                        type="submit"
                        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Join Room
                    </button>
                </form>
            ) : (
                <>
                    <div className="text-2xl mb-4">{currentSong.split('public/')[1]}</div>
                <div className="controls flex justify-center items-center space-x-2">
                    <audio controls src={currentSong} ref={audioPlayer} className="w-full h-10">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {Object.entries(albumCovers).map(([track, cover], index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center">
                                <img 
                                    src={cover} 
                                    alt={`${track} Cover`} 
                                    className="w-16 h-16 mr-4 rounded-full object-cover" 
                                />
                                <div className="flex-grow">
                                    <div className="text-lg font-medium">{track.split('-').join(' ')}</div>
                                    <button
                                        onClick={() => handleTrackChange(track)}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                                    >
                                        Play
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleLeaveRoom}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        Leave Room
                    </button>
                </>
            )}
        </div>
    );
}

export default MusicPlayer;
