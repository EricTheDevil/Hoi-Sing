import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import menuImage from './Images/Menu.png';

function Home() {
	return (
		<div className="Home">
			<div class="pageContainer">
				<div class="leftContainer">
					<div class="restName">
						<h1> Hoi Sing </h1>
					</div>
					<hr
						style={{
							color: '#000000',
							backgroundColor: '#ffffff ',
							height: 0.5,
							borderColor: '#ffffff',
						}}
					/>
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
					<hr
						style={{
							color: '#000000',
							backgroundColor: '#ffffff ',
							height: 0.5,
							borderColor: '#ffffff',
						}}
					/>
					<div class="pageFooter">
						{/*	<br> </br> */}
						<p>©HOI SING ALL RIGHTS RESERVED </p>
					</div>
				</div>

				<div class="rightContainer">
					<div class="navbar">
						<span>
							<Link to="/">Home</Link>
						</span>
						<span>
							<Link to="/menu">Menu</Link>
						</span>
						<span>
							<Link to="/contact">Contact</Link>
						</span>

						<Switch>
							<Route id="clickerHome" path="/" exact></Route>
							<Route
								id="clickerMenu"
								path="/Menu"
								component={Menu}
								exact></Route>
							<Route id="clickerContact" path="/contact" exact>
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
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#000000',
								}}
							/>
							<p> Wij zijn gesloten vanaf 08/03/2025 tot en met 27/03/2025.</p>
							<p style={{ color: 'yellow' }}> Wij informeren u dat wij vanaf 2 februari uitsluitend afhaalmaaltijden aanbieden. Het is vanaf dan niet meer mogelijk om binnen te eten. Bedankt voor uw begrip.</p>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#000000',
								}}
							/>
							<p> Nieuwe openingsuren</p>
							<p> Maandag t/m zaterdag van 17:00 tot 21:00</p>
							<p> Woensdag gesloten </p>
							<p> Zondag en feestdagen van 12:00 tot 14:00 en 17:00 tot 21:00</p>	
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 5,
									borderColor: '#000000',
								}}
							/>

						</div>
					</div>			
				</div>
			</div>
		</div>
	);
}

export default Home;
