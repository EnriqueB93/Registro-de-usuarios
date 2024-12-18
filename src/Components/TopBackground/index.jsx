import UsersImg  from "../../assets/users.png"
import { Background } from "./styles";

function TopBackground(){
    return(

        <Background>
            <img src={UsersImg } alt="usuarios" />
        </Background>
    )
}

export default TopBackground