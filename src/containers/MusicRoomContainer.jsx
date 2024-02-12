import MusicPlayer from "../components/organisms/MusicPlayer";
import AuthenticatedHeader from "../components/atoms/AuthenticatedHeader";

function musicRoomContainer(){
    return(
        <>
        <AuthenticatedHeader></AuthenticatedHeader>
        <MusicPlayer></MusicPlayer>
        </>

    );
}

export default musicRoomContainer;