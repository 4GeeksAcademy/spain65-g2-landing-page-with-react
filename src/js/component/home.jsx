import React from "react";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";
import  Navbar  from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

import burguer1 from '../../img/hamburguesa1.jpg';
import burguer2 from '../../img/hamburguesa2.jpg';
import burguer3 from '../../img/hamburguesa7.jpg';
import burguer4 from '../../img/hamburguesa4.jpg';



//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Jumbotron />
			<div className="d-flex">
				<Cards title='Hamburcheesa Most-Wanted' image={burguer1} description='Mega hamburguesa con 5 tipos de queso, si la terminas te sacamos en silla de ruedas!!' buy='12,90' />
				<Cards title='Hannibal burguer 2.0' image={burguer2} description='Super hamburguesa con 3 tipos de carne, bacon y huevo, no apto para veganos!!' buy='14,90' />
				<Cards title='Mio Cardio burguer' image={burguer3} description='La Healthy burguer por excelencía, si tomas una al día vivirás más de 100 años!!' buy='13,90' />
				<Cards title='Combo triple bypass' image={burguer4} description='Todas las RobertoBurguers juntas, para compartir (o no) con tus seres queridos!!' buy='49,90' />
			</div>
			<Footer />
		</>
	);
};

export default Home;
