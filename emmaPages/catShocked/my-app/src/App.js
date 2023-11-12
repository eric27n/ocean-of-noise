// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
// import { FooterFull } from "./FooterFull";
import './App.css';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [evenNumbersCount, setEvenNumbersCount] = useState(0);
  const [kexpData, setKexpData] = useState(null);

  const fetchEvenNumbersCount = () => {
    const requestBody = { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }; // Example array of numbers

    fetch('http://localhost:5000/count-evens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
      setEvenNumbersCount(data.even_numbers_count); // Update state with the count
    })
    .catch(error => {
      console.error('Error fetching even numbers count: ', error);
    });
  };  

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => {
        setTracks(data); // Assuming data is an array of tracks
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    // ... existing fetch calls ...

    // Fetch data from the new Flask route
    fetch('http://localhost:5000/api/kexp')
      .then(response => response.json())
      .then(data => {
        setKexpData(data); // Set the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching KEXP data: ', error);
      });
  }, []);


  return (
    <div className="box">
      <div className="artist-page">
        <div className="main-content">
          <div className="overlap">
            <div className="track-list">
              <div className="track">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">1</div>
                </div>
              </div>
              <div className="group-wrapper">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">2</div>
                </div>
              </div>
              <img className="divider" alt="Divider" src="divider.svg" />
              <img className="img" alt="Divider" src="image.svg" />
              <div className="div-wrapper">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">3</div>
                </div>
              </div>
              <img className="divider-2" alt="Divider" src="divider-2.svg" />
              <div className="track-2">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">4</div>
                </div>
              </div>
              <div className="track-3">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">5</div>
                </div>
              </div>
              <img className="divider-3" alt="Divider" src="divider-3.svg" />
              <img className="divider-4" alt="Divider" src="divider-4.svg" />
              <div className="track-4">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">6</div>
                </div>
              </div>
              <img className="divider-5" alt="Divider" src="divider-5.svg" />
              <div className="track-5">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">7</div>
                </div>
              </div>
              <div className="track-6">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">8</div>
                </div>
              </div>
              <img className="divider-6" alt="Divider" src="divider-6.svg" />
              <img className="divider-7" alt="Divider" src="divider-7.svg" />
              <div className="track-7">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">9</div>
                </div>
              </div>
              <img className="divider-8" alt="Divider" src="divider-8.svg" />
              <div className="track-8">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">10</div>
                </div>
              </div>
              <div className="track-9">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number">11</div>
                </div>
              </div>
              <img className="divider-9" alt="Divider" src="divider-9.svg" />
              <img className="divider-10" alt="Divider" src="divider-10.svg" />
              <div className="track-10">
                <div className="group">
                  <div className="text-wrapper-2">Track Name</div>
                  <div className="track-number-2">12</div>
                </div>
              </div>
              <img className="divider-11" alt="Divider" src="divider-11.svg" />
            </div>
            <div className="blog-card">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="link-12">Read More</div>
                  <p className="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore...
                  </p>
                  <div className="title">About Artist Name</div>
                </div>
              </div>
            </div>
            <div className="album-credits-wrapper">
              <div className="album-credits">
                <div className="overlap-2">
                  <div className="group-2">
                    <div className="text-wrapper-3">Artwork Credits</div>
                    <div className="text-wrapper-4">Artwork</div>
                    <div className="text-wrapper-5">Album Label</div>
                    <div className="text-wrapper-6">Label</div>
                    <div className="title-2">Album Credits</div>
                  </div>
                  <img className="divider-12" alt="Divider" src="divider-12.svg" />
                  <img className="divider-13" alt="Divider" src="divider-13.svg" />
                </div>
              </div>
            </div>
            <div className="top-tracks">
              <div className="table">
                <div className="top-track">
                  <div className="top-track-title">Top Track 2</div>
                  <div className="top-track-number">2</div>
                  <img className="divider-14" alt="Divider" src="divider-14.svg" />
                </div>
                <div className="top-track-2">
                  <div className="top-track-title-2">Top Track 1</div>
                  <div className="top-track-number-2">1</div>
                  <img className="divider-14" alt="Divider" src="divider-15.svg" />
                </div>
                <div className="title-2">Top Tracks</div>
                <div className="top-track-3">
                  <div className="top-track-title">Top Track 3</div>
                  <div className="top-track-number">3</div>
                  <img className="divider-14" alt="Divider" src="divider-16.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="album">
          <div className="overlap-3">
            <div className="recommendation">
              <div className="media" />
              <div className="title-3">Artist Name</div>
            </div>
            <div className="subtitle-5">You may also like...</div>
            <div className="recommendation-2">
              <div className="media" />
              <div className="title-3">Artist Name</div>
            </div>
            <div className="recommendation-3">
              <div className="media" />
              <div className="title-3">Artist Name</div>
            </div>
            <div className="recommendation-4">
              <div className="media" />
              <div className="title-3">Artist Name</div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="album-header">
            <div className="blog-card-feature">
              <div className="overlap-group-2">
                <div className="overlap-4">
                  <div className="album-name">Artist Name</div>
                  <p className="aliases">AKA: Alias 1, Alias 2</p>
                </div>
                <img className="media-2" alt="Media" src="media.png" />
                <div className="media-label">Artist</div>
                <div className="release-date">Released Jan. 1, 2000</div>
              </div>
            </div>
          </div>
        </header>
        {/* <FooterFull className="footer-full-instance" /> */}
      </div>
    </div>
  );
}

export default App;
