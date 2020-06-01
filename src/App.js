import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Providers
import GamesContextProvider from './contexts/GamesContext';
import GameInfoContextProvider from './contexts/GameInfoContext';
import GenderContextProvider from './contexts/GenderContext';
import DevlopersContext from './contexts/DevlopersContext';

//Pages
import Header from './components/Common/Header.Component';
import Home from './components/Pages/Home.Component';
import GamesPage from './components/Pages/GamesPage.Component';
import GamePage from './components/Pages/GamePage.Component';
import GenderPage from './components/Pages/GenderPage.Component';
import DevelopersPage from './components/Pages/DevelopersPage.Component';

//Comon
import SideBar from './components/Common/SideBar.Component';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

//Css
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Common/Footer.Component';

const App = () => (
	<BrowserRouter>
		<Header />
	  	<Container fluid>

			<Row>
				<Col xs={6} md ={2} >      
					<SideBar />
                </Col>
				<Col xs = {6} md = {10}>
					<Switch>
							<Route exact path="/">
								<GamesContextProvider>
									<Home />
								</GamesContextProvider>
							</Route>
							<Route path="/games/:id">
								<GamesContextProvider>
									<GamesPage/>
								</GamesContextProvider>
							</Route>
							<Route exact path="/game/:id">
								<GameInfoContextProvider>
									<GamePage />
								</GameInfoContextProvider>
							</Route>

							<Route exact path="/genres/:id">
								<GenderContextProvider>
									<GenderPage />
								</GenderContextProvider>
							</Route>
							<Route exact path="/developers">
								<DevlopersContext>
									<DevelopersPage />
								</DevlopersContext>
							</Route>
						
					</Switch>  
				</Col>	
			</Row> 
		</Container>
		<Footer />
	</BrowserRouter>

  );

export default App;
