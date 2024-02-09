import AuthenticatedHeader from "../components/atoms/AuthenticatedHeader"
import Home from "../components/molecules/Home";

function HomeContainer(){

    return(
        <>
            <AuthenticatedHeader></AuthenticatedHeader>
            <Home></Home>
        </>

    )
}

export default HomeContainer;