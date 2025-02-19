import { Link } from 'react-router-dom';

function Contact() {
	return (
		<div class="pageContainer">
			<div class="rightContainer">
				<div class="menuContainer">
					<div id="itemContact">
						<h1> Openingsuren </h1>
						<ul>
							<li>Maandag : 17:00 - 21:00 </li>
							<li>Dinsdag : 17:00 - 21:00 </li>
							<li>Woensdag : Gesloten </li>
							<li>Donderdag : 17:00 - 21:00 </li>
							<li>Vrijdag : 17:00 - 21:00 </li>
							<li>Zaterdag : 17:00 - 21:00 </li>
							<li>Zondag : 12:00 - 14:00 en 17:00 - 21:00</li>
						</ul>
						<h1> Telefoon </h1>
						<ul>
							<li> 052 212 133 </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
