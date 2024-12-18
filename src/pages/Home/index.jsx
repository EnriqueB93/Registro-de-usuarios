import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/styles";
import { Title } from "../../Components/Title/styled";
import TopBackground from "../../Components/TopBackground";
import api from "../../server/api";
import { Container, ContainerInput, Form, Input, Label } from "./styles";

function Home() {
	const inputName = useRef();
	const inputAge = useRef();
	const inputEmail = useRef();

	const navigate = useNavigate();

	async function registerNewuser() {
		const data = await api.post("/usuarios", {
			name: inputName.current.value,
			email: inputEmail.current.value,
			// biome-ignore lint/style/useNumberNamespace: <explanation>
			age: parseInt(inputAge.current.value),
		});
		console.log(data);
	}

	return (
		<Container>
			<TopBackground />

			<Form>
				<Title>Registro De Usuarios</Title>

				<ContainerInput>
					<div>
						<Label>
							Nombre <span> *</span>
						</Label>
						<Input
							type="text"
							placeholder="Nombre de usuario "
							ref={inputName}
						/>
					</div>

					<div>
						<Label>
							Edad <span> *</span>
						</Label>
						<Input type="number" placeholder="Edad" ref={inputAge} />
					</div>
				</ContainerInput>

				<div style={{ width: "100%" }}>
					<Label>
						Email <span> *</span>
					</Label>
					<Input type="email" placeholder="Email" ref={inputEmail} />
				</div>

				<Button type="button" onClick={registerNewuser} theme={"primary"}>
					Registrar Usuario
				</Button>
			</Form>

			<Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
				lista de usuarios
			</Button>
		</Container>
	);
}

export default Home;
