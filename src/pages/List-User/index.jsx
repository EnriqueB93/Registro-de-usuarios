import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/Button/styles"
import { Title } from "../../Components/Title/styled"
import TopBackground from "../../Components/TopBackground"
import trashImg from "../../assets/trash.svg"
import api from "../../server/api"
import { Container } from "../List-User/styles"
import { Avataruser, CartUsers, ContainerUser, TrasIcom } from "./styles"

function ListUsers() {

    const navetage = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get("/usuarios")
            console.log({ data })

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUser(id) {

        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter(user => user.id !== id)

        setUsers(updateUsers)
    }

    return (
        <Container>

            <TopBackground />

            <Title>Lista De Usuarios</Title>

            <ContainerUser>

                {users.map((user) => (
                    <CartUsers key={user.id}>
                        <Avataruser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrasIcom src={trashImg} alt="icon-papelera" onClick={() => deleteUser(user.id)} />
                    </CartUsers>
                ))}
            </ContainerUser>

            <Button onClick={() => navetage("/")}>ATRAS</Button>



        </Container>
    )
}

export default ListUsers