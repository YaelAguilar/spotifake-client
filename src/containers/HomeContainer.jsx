import AuthenticatedHeader from "../components/atoms/AuthenticatedHeader"
import Home from "../components/molecules/Home";
import Noti from "../components/molecules/noti";

function HomeContainer(){

    return(
        <>
            <AuthenticatedHeader></AuthenticatedHeader>
            <Noti></Noti>
            <Home></Home>
        </>

    )
}

export default HomeContainer;