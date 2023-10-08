import logo from './logo.svg';

import { Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Menu from './Menu';

function Homee() {
	return (
		<div className="Home">
			<div class="pageContainer">
				<div class="leftContainer">
					<div class="restName">
						<h1> Hoi Sing </h1>
					</div>

					<div class="restDescription">
						<dl> Welkom </dl>
						<dt>
							Restaurant Hoi Sing is een Chinees restaurant in het centrum van
							Lebbeke.
						</dt>
						<dt>
							We hebben vooral Cantonese gerechten, maar dat betekent niet dat
							onze gerechten beperkt zijn. Onze hoofdkok heeft meer dan 30 jaar
							ervaring in authentieke Chineze keukens, waardoor we een zeer
							grote variatie van gerechten hebben. Wij willen dat de klant
							geniet van al onze gerechten waardoor onze hoofdkok ervoor zorgt
							dat onze ingredienten vers en van hoge qualiteit zijn.
							<br />
							Heb je allergieen? Je kan dit vermelden en de keuken zal het
							gerecht hieraan aanpassen.
						</dt>
					</div>

					<div class="pageFooter">
						{/*	<br> </br> */}
						<p>©HOI SING ALL RIGHTS RESERVED </p>
					</div>
				</div>

				<div class="rightContainer">
					<div class="navbar">
						<div>
							<Link to="/">Home</Link>
						</div>
						<div>
							<Link to="/menu">Blog Articles</Link>
						</div>
						<div>
							<Link to="/contact">Contact Me</Link>
						</div>

						<hr />

						<Switch>
							<Route exact path="/"></Route>
							<Route path="/menu">
								<Menu />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
						</Switch>

						{/* 
						<a href="menu">Menu</a>
						<a href="contact">Contact</a>
*/}
					</div>

					<div class="menuContainer">
						<div id="itemHome">
							<h1> Home </h1>
							<p>
								We zijn gesloten tot en met 1 november
							</p>
							<p> Nieuwe openingsuren</p>
							<p> Maandag t/m zaterdag van 17:00 tot 21:30</p>
							<p> Zondag en feestdagen van 12:00 tot 22:00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homee;
