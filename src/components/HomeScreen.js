import React from 'react';
import '../css/HomeScreen.css';
import Banner from './Banner';
import Nav from './Nav'
import requests from '../Requests'
import Row from './Row'
import FlipMove from 'react-flip-move';


function HomeScreen() {
    return (
        <div className="homescreen">
            <Nav /> 
            <Banner /> 
            <FlipMove className="flip-wrapper">
            <Row
                title="NetflixOriginals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
                />
            </FlipMove>
        </div>
    )
}

export default HomeScreen
