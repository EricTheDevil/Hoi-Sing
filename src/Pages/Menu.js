import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div className="Menu">
			<div class="pageContainer">
				<div class="rightContainer">
					<div class="menuContainer">
						<div id="itemMenu">
							<h1> Menu</h1>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#000000',
								}}
							/>
							<p> </p>
							<table>
								<tr>
									<td></td>
									<th> Soepen </th>
								</tr>

								<tr>
									<td class="LeftHolder">1.</td>
									<td class="MiddleHolder">Tomatensoep</td>
									<td class="RightHolder">3.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">2.</td>
									<td class="MiddleHolder">Wantansoep</td>
									<td class="RightHolder">4.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">3.</td>
									<td class="MiddleHolder">Bamboesoep</td>
									<td class="RightHolder">3.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">4.</td>
									<td class="MiddleHolder">Haaivinnensoep met krab</td>
									<td class="RightHolder">5.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">5.</td>
									<td class="MiddleHolder">Haaivinnensoep met krip</td>
									<td class="RightHolder">4.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">6.</td>
									<td class="MiddleHolder">
										Speciale soep(mix van vlees en vis)
									</td>
									<td class="RightHolder">5.30€</td>
								</tr>
								<tr>
									<td class="LeftHolder">7.</td>
									<td class="MiddleHolder">Scampisoep</td>
									<td class="RightHolder">5.60€</td>
								</tr>
								<tr>
									<td class="LeftHolder">8.</td>
									<td class="MiddleHolder">Pikante soep</td>
									<td class="RightHolder">4.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">8a.</td>
									<td class="MiddleHolder">Sai Wu Beef soep</td>
									<td class="RightHolder">4.70€</td>
								</tr>
								<tr>
									<td class="LeftHolder">8b.</td>
									<td class="MiddleHolder">Maisoep met krab</td>
									<td class="RightHolder">5.30€</td>
								</tr>
								<tr>
									<td class="LeftHolder">8c.</td>
									<td class="MiddleHolder">Maisoep met kip</td>
									<td class="RightHolder">4.70€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Voorgerechten </th>
								</tr>

								<tr>
									<td class="LeftHolder">9.</td>
									<td class="MiddleHolder">Loempia met kip</td>
									<td class="RightHolder">3.90€</td>
								</tr>

								<tr>
									<td class="LeftHolder">9a.</td>
									<td class="MiddleHolder">Mini loempia met kip en banaan</td>
									<td class="RightHolder">4.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">10.</td>
									<td class="MiddleHolder">Loempia speciaal</td>
									<td class="RightHolder">4.60€</td>
								</tr>
								<tr>
									<td class="LeftHolder">10a.</td>
									<td class="MiddleHolder">Loempia met krab</td>
									<td class="RightHolder">4.90€</td>
								</tr>
								<tr>
									<td class="LeftHolder">11.</td>
									<td class="MiddleHolder">Gebakken ribbetjes met look</td>
									<td class="RightHolder">5.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">11a.</td>
									<td class="MiddleHolder">Gebakken banaan</td>
									<td class="RightHolder">5.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">12</td>
									<td class="MiddleHolder">Kipsates</td>
									<td class="RightHolder">6.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">13</td>
									<td class="MiddleHolder">Mini loempia's mix</td>
									<td class="RightHolder">5.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">13a</td>
									<td class="MiddleHolder">Gestoomde Dim Sum</td>
									<td class="RightHolder">6.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">14</td>
									<td class="MiddleHolder">Koepoek</td>
									<td class="RightHolder">2.80€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Curryschotels (met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">15.</td>
									<td class="MiddleHolder">Gebraden 1/2 kip met curry</td>
									<td class="RightHolder">9.20€</td>
								</tr>

								<tr>
									<td class="LeftHolder">16.</td>
									<td class="MiddleHolder">Kipfillet met curry</td>
									<td class="RightHolder">10.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">17.</td>
									<td class="MiddleHolder">Ossenhaas met curry</td>
									<td class="RightHolder">12.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">18.</td>
									<td class="MiddleHolder">Varkensfilet met curry</td>
									<td class="RightHolder">10.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">19.</td>
									<td class="MiddleHolder">Scampi\s met curry</td>
									<td class="RightHolder">16.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">20.</td>
									<td class="MiddleHolder">Speciale currymix van het huis</td>
									<td class="RightHolder">15.80€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Tomatensaus (met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">21.</td>
									<td class="MiddleHolder">Gebraden 1/2 kip met tomatensaus</td>
									<td class="RightHolder">10.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">22.</td>
									<td class="MiddleHolder">Kipfilet met tomatensaus</td>
									<td class="RightHolder">10.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">23.</td>
									<td class="MiddleHolder">Ossenhaas met tomatensaus</td>
									<td class="RightHolder">12.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">24.</td>
									<td class="MiddleHolder">Varkensfilet met tomatensaus</td>
									<td class="RightHolder">10.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">25.</td>
									<td class="MiddleHolder">Scampi's met tomatensaus</td>
									<td class="RightHolder">16.80€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Chop Shoy (met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">26</td>
									<td class="MiddleHolder">Chop Shoy speciaal</td>
									<td class="RightHolder">10.80€</td>
								</tr>

								<tr>
									<td class="LeftHolder">27.</td>
									<td class="MiddleHolder">Chop Shoy met kip</td>
									<td class="RightHolder">9.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">27a.</td>
									<td class="MiddleHolder">Chop Shoy met 1/2 kip</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">28.</td>
									<td class="MiddleHolder">Chop Shoy met ossenhaas</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">29.</td>
									<td class="MiddleHolder">Chop Shoy met varkensfilet</td>
									<td class="RightHolder">9.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">31.</td>
									<td class="MiddleHolder">Chop Shoy met scampi's</td>
									<td class="RightHolder">15.70€</td>
								</tr>
								<tr>
									<td class="LeftHolder">32.</td>
									<td class="MiddleHolder">Chop Shoy met garnalen</td>
									<td class="RightHolder">11.00€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Nasigoreng </th>
								</tr>

								<tr>
									<td class="LeftHolder">33.</td>
									<td class="MiddleHolder">Nasi speciaal(babi pangang sate)</td>
									<td class="RightHolder">10.80€</td>
								</tr>

								<tr>
									<td class="LeftHolder">33a.</td>
									<td class="MiddleHolder">Nasi speciaal(kip en ei)</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">33b.</td>
									<td class="MiddleHolder">Nasi met ossenhaas</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">34.</td>
									<td class="MiddleHolder">Nasi met kip</td>
									<td class="RightHolder">9.30€</td>
								</tr>
								<tr>
									<td class="LeftHolder">34a.</td>
									<td class="MiddleHolder">Nasi met 1/2 kip</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">35.</td>
									<td class="MiddleHolder">Nasi met geroosterd varkensfilet</td>
									<td class="RightHolder">9.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">36.</td>
									<td class="MiddleHolder">Nasi met scampi's</td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">37.</td>
									<td class="MiddleHolder">Nasi met krab</td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">38.</td>
									<td class="MiddleHolder">Nasi met garnalen</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">38a.</td>
									<td class="MiddleHolder">Nasi Singapore stijl</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">38b.</td>
									<td class="MiddleHolder">Nasi Say Chaw</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">(Kip,garnalen,worst en ham)</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Bamigoreng</th>
								</tr>

								<tr>
									<td class="LeftHolder">39</td>
									<td class="MiddleHolder">Bami speciaal</td>
									<td class="RightHolder">10.80€</td>
								</tr>

								<tr>
									<td class="LeftHolder">39a.</td>
									<td class="MiddleHolder">Bami speciaal(kip en ei)</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">40.</td>
									<td class="MiddleHolder">Bami met kip</td>
									<td class="RightHolder">9.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">40a.</td>
									<td class="MiddleHolder">Bami met 1/2 kip</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">41.</td>
									<td class="MiddleHolder">Bami met geroosterd varkensfilet</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">42.</td>
									<td class="MiddleHolder">Bami met ossenhaas</td>
									<td class="RightHolder">11.00€</td>
								</tr>

								<tr>
									<td class="LeftHolder">43.</td>
									<td class="MiddleHolder">Bami met scampi's</td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">44.</td>
									<td class="MiddleHolder">Bami met garnalen</td>
									<td class="RightHolder">11.00€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Mihoen(Vermicelli)</th>
								</tr>

								<tr>
									<td class="LeftHolder">40m</td>
									<td class="MiddleHolder">Mihoen met kip</td>
									<td class="RightHolder">11.10€</td>
								</tr>

								<tr>
									<td class="LeftHolder">41m.</td>
									<td class="MiddleHolder">
										Mihoen met geroosterd varkensfilet
									</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">42m.</td>
									<td class="MiddleHolder">Mihoen met assenhaas</td>
									<td class="RightHolder">11.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">43m.</td>
									<td class="MiddleHolder">Mihoen met scampi's</td>
									<td class="RightHolder">16.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">44m.</td>
									<td class="MiddleHolder">Mihoen met garnalen</td>
									<td class="RightHolder">12.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">44a.</td>
									<td class="MiddleHolder">Mihoen Singapore stijl</td>
									<td class="RightHolder">11.00€</td>
								</tr>

								<tr>
									<td class="LeftHolder">44b.</td>
									<td class="MiddleHolder">Mihoen Hoi Sing</td>
									<td class="RightHolder">11.00€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Zoetzure schotels(met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">45</td>
									<td class="MiddleHolder">
										Gefrituurd vlees met zoetzure saus
									</td>
									<td class="RightHolder">10.80€</td>
								</tr>

								<tr>
									<td class="LeftHolder">46.</td>
									<td class="MiddleHolder">Gefrituurd kip met zoetzure saus</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">47.</td>
									<td class="MiddleHolder">
										Phoenix scampi's met zoetzure saus
									</td>
									<td class="RightHolder">16.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">48.</td>
									<td class="MiddleHolder">Ribbetjes met zoetzure saus</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">49.</td>
									<td class="MiddleHolder">Babi pangang</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">49a.</td>
									<td class="MiddleHolder">Babi pangang met kip</td>
									<td class="RightHolder">11.00€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Omelet(met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">50.</td>
									<td class="MiddleHolder">Omelet met garnalen</td>
									<td class="RightHolder">11.00€</td>
								</tr>

								<tr>
									<td class="LeftHolder">51.</td>
									<td class="MiddleHolder">Omelet met krab</td>
									<td class="RightHolder">15.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">52.</td>
									<td class="MiddleHolder">Omelet speciaal</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">53.</td>
									<td class="MiddleHolder">Omelet met scampi's</td>
									<td class="RightHolder">16.50€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Specialiteiten(met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">55.</td>
									<td class="MiddleHolder">Ossenhaas met ananas</td>
									<td class="RightHolder">12.00€</td>
								</tr>

								<tr>
									<td class="LeftHolder">56.</td>
									<td class="MiddleHolder">Kipfilet met ananas</td>
									<td class="RightHolder">10.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">57.</td>
									<td class="MiddleHolder">Kipfilet met cashewnoten</td>
									<td class="RightHolder">12.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">58.</td>
									<td class="MiddleHolder">Kipfilet met diverse groenten</td>
									<td class="RightHolder">10.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">58b.</td>
									<td class="MiddleHolder">Kipfilet met Tieuw Yien</td>
									<td class="RightHolder">12.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">59.</td>
									<td class="MiddleHolder">Kipfilet met zwarte bonen saus</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">60.</td>
									<td class="MiddleHolder">Frisse kipfilet met sesamzaadjes</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">62.</td>
									<td class="MiddleHolder">Kipfiletpikante stijl</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">63.</td>
									<td class="MiddleHolder">Gebraden kip Chinese stijl</td>
									<td class="RightHolder">10.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">64.</td>
									<td class="MiddleHolder">Eend chop shoy</td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">65.</td>
									<td class="MiddleHolder">Eend Peking stijl pikant</td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">66.</td>
									<td class="MiddleHolder">
										Ribbetjes Peking stijl(licht pikant)
									</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">67.</td>
									<td class="MiddleHolder">
										Varkensfilet met diverse groenten
									</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">68.</td>
									<td class="MiddleHolder">Ossenhaas met diverse groenten</td>
									<td class="RightHolder">12.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">69.</td>
									<td class="MiddleHolder">Eend met ananas</td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">70.</td>
									<td class="MiddleHolder">Scampi's met diverse groenten</td>
									<td class="RightHolder">16.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">70a.</td>
									<td class="MiddleHolder">
										Scampi's met seldersaus en cashewnoten
									</td>
									<td class="RightHolder">16.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">71.</td>
									<td class="MiddleHolder">Scampi's Peking stijl pikant</td>
									<td class="RightHolder">16.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">72.</td>
									<td class="MiddleHolder">
										Kikkerbillen met diverse groenten
									</td>
									<td class="RightHolder">15.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">73.</td>
									<td class="MiddleHolder">Kikkerbillen met lookboter</td>
									<td class="RightHolder">15.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">74.</td>
									<td class="MiddleHolder">
										Kikkerbillen Tieuw Yien(pikant met look)
									</td>
									<td class="RightHolder">15.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">75.</td>
									<td class="MiddleHolder">Eind met gewokte seizoengroenten</td>
									<td class="RightHolder">15.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">77.</td>
									<td class="MiddleHolder">Geroosterd varkensfilet</td>
									<td class="RightHolder">11.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">78.</td>
									<td class="MiddleHolder">Ribbetjes met zwarte bonensaus</td>
									<td class="RightHolder">10.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">79.</td>
									<td class="MiddleHolder">Ribbetjes met looksaus</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">79a.</td>
									<td class="MiddleHolder">Ribbetjes Tieuw Yein met look</td>
									<td class="RightHolder">11.00€</td>
								</tr>
								<tr>
									<td class="LeftHolder">80.</td>
									<td class="MiddleHolder">King Tow vlees</td>
									<td class="RightHolder">12.80€</td>
								</tr>
								<tr></tr>
								<tr></tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Inktvis(met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">110.</td>
									<td class="MiddleHolder">Inktvis met currysaus</td>
									<td class="RightHolder">15.80€</td>
								</tr>

								<tr>
									<td class="LeftHolder">111.</td>
									<td class="MiddleHolder">Inktvis met zwarte bonensaus</td>
									<td class="RightHolder">15.80€</td>
								</tr>

								<tr>
									<td class="LeftHolder">112.</td>
									<td class="MiddleHolder">Inktvis pikante stijl</td>
									<td class="RightHolder">15.80€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th> Gerechten in een potje(met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">121.</td>
									<td class="MiddleHolder">Potje van zeevruchten met curry</td>
									<td class="RightHolder">19.00€</td>
								</tr>

								<tr>
									<td class="LeftHolder">122.</td>
									<td class="MiddleHolder">Potje van stoofvlees met curry</td>
									<td class="RightHolder">14.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">123.</td>
									<td class="MiddleHolder">
										Potje van jonge kip(zeer pikant){' '}
									</td>
									<td class="RightHolder">15.50€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>
							<table>
								<tr>
									<td></td>
									<th>Voorgerechten</th>
								</tr>
								<tr>
									<td class="LeftHolder">A1.</td>
									<td class="MiddleHolder">
										Gestoomde Sint-Jakobsschelp met look en zilverharen
									</td>
									<td class="RightHolder">9.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A2.</td>
									<td class="MiddleHolder">Phoenix scampi's</td>
									<td class="RightHolder">8.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">A3.</td>
									<td class="MiddleHolder">Gevlokte garnalenballetjes </td>
									<td class="RightHolder">8.50€</td>
								</tr>
								{/*

    			        <tr>
    			            <td class ="LeftHolder">A4.</td>
    			            <td class ="MiddleHolder">Eend Huing Sow (eend met groenten en zelf op te rollen) </td>
    			            <td class ="RightHolder">9.50€</td>
    			        </tr>
    			        */}

								<tr>
									<td class="LeftHolder">A5.</td>
									<td class="MiddleHolder">Mix schotel Hoi Sing </td>
									<td class="RightHolder">9.50€</td>
								</tr>
								{/*

    			        <tr>
    			            <td class ="LeftHolder">A6.</td>
    			            <td class ="MiddleHolder">Gebakken krabscharen </td>
    			            <td class ="RightHolder">8.50€</td>
    			        </tr>
    			        */}

								<tr>
									<td class="LeftHolder">A7.</td>
									<td class="MiddleHolder">Kikkerbilletjes met lookboter </td>
									<td class="RightHolder">8.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A8.</td>
									<td class="MiddleHolder">Kikkerbilletjes Tieuw Yien </td>
									<td class="RightHolder">8.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A9.</td>
									<td class="MiddleHolder">Scampi Tieuw Yien met look </td>
									<td class="RightHolder">9.50€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th>Hoofdschotels (met rijst of frieten)</th>
								</tr>

								<tr>
									<td class="LeftHolder">A12. </td>
									<td class="MiddleHolder">
										Nestje met geewokte zeevruchten en seizoensgroenten{' '}
									</td>
									<td class="RightHolder">19.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">A13.</td>
									<td class="MiddleHolder">Gewokte visfilet</td>
									<td class="RightHolder">15.50€</td>
								</tr>

								<tr>
									<td class="LeftHolder">A14.</td>
									<td class="MiddleHolder">Gewokte Sint-Jakobsschelpen </td>
									<td class="RightHolder">19.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A15.</td>
									<td class="MiddleHolder">
										Krokante noedels met scampi's op hete plaat{' '}
									</td>
									<td class="RightHolder">16.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A16.</td>
									<td class="MiddleHolder">
										Ribbetjes Chuing Paw op hete plaat{' '}
									</td>
									<td class="RightHolder">14.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A17.</td>
									<td class="MiddleHolder">Gesneden ossenhas op hete plaat </td>
									<td class="RightHolder">15.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A18.</td>
									<td class="MiddleHolder">Soep met noedels en scampi's </td>
									<td class="RightHolder">14.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A19.</td>
									<td class="MiddleHolder">Gestoomde scampi's met look </td>
									<td class="RightHolder">19.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A20.</td>
									<td class="MiddleHolder">Scampi's op hete plaat </td>
									<td class="RightHolder">19.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A21.</td>
									<td class="MiddleHolder">Scampi's in Tieuw Yien kruiden </td>
									<td class="RightHolder">19.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A22.</td>
									<td class="MiddleHolder">
										Gewokte kreeft op Chinese wijze (twee dagen op voorhand
										bestellen){' '}
									</td>
									<td class="RightHolder">dagenprijs</td>
								</tr>
								<tr>
									<td class="LeftHolder">A23.</td>
									<td class="MiddleHolder">
										Eekhoorn vis (seizoensaanbieding){' '}
									</td>
									<td class="RightHolder">16.20€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A24.</td>
									<td class="MiddleHolder">
										Gebakken hertenfilet met zoetzure saus{' '}
									</td>
									<td class="RightHolder">15.80€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A25.</td>
									<td class="MiddleHolder">
										Eend Huing Sow (eend met groenten om zelf op te rollen){' '}
									</td>
									<td class="RightHolder">19.50€</td>
								</tr>
								<tr>
									<td class="LeftHolder">A26.</td>
									<td class="MiddleHolder">
										Varkenssteak met ajuin op hete plaat{' '}
									</td>
									<td class="RightHolder">16.50€</td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th> Rijsttafel voor 1 persoon</th>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Tomatensoep</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Loempia met kip</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Nasi met kip</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">of halve kip met curry</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">of chop shoy met kip</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">16.80€</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th> Rijsttafel A voor 2 personen</th>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Tomatensoep</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Loempia met kip</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Kip met diverse groenten</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">
										Gefrituurde kip met zoetzure saus
									</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Nasi</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">40.00€</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th> Rijsttafel B voor 2 personen</th>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Wantansoep</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Ossenhaas met currysaus</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Kip chinese stijl</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">
										Gefrituurde kip met zoetzure saus
									</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Nasi</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">46.00€</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th> Rijsttafel voor 3 personen</th>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Pikante soep</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Loempia met kip</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Ossenhaas met currysaus</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Kip Chinese stijl</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">
										Gefrituurde kip met zoetzure saus
									</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Nasi</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">67.00€</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th> Rijsttafel C voor 4 personen</th>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Sai Wu Beef soep</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Chop shoy speciaal</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">
										Gefrituurde scampi's met zoetzure saus
									</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Ossenhaas met tomatensaus</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Kip met diverse groenten</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Nasi speciaal</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">92.00€</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<hr
								style={{
									color: '#000000',
									backgroundColor: '#ffffff ',
									height: 0.5,
									borderColor: '#ffffff',
								}}
							/>

							<table>
								<tr>
									<td></td>
									<th> Rijsttafel D voor 4 personen</th>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Pikante soep</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Chop shoy met scampi's</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Babi pangang</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Kipfilet met ananas</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Eend Peking stijl</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">Nasi speciaal</td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder">92.00€</td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<table>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
							</table>
							<table>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
								<tr>
									<td class="LeftHolder"></td>
									<td class="MiddleHolder"></td>
									<td class="RightHolder"></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
