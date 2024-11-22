import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import justice from '../../Assets/justice.webp';
import '../HomePage/HomePage.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="image-container">
        <img id='justiceimg' src={justice} alt="Adalet mülkün temelidir" />
        <div className="overlay-text">
          <h1>Project Overview</h1>
          <div>Metin Girin</div>
          <h1>Project Objective</h1>
          <div>Cicikuş</div>
          <h1>Features</h1>
          <ul>
            <li>Merhaba nasılsın burnun kapıya kısılsın</li>
          </ul>
          <h1>Technologies</h1>
          <ul>
            <li>Merhaba nasılsın burnun kapıya kısılsın</li>
          </ul>
          <h1>Conclusion</h1>
          <div>
            {/* Yeni Kod: İndirme Butonları */}
            <h1>Project Downloads</h1>
            <ul>
              <li>
              <a href="/ProjectProposal.zip" download="ProjectProposal">
              <button>Download Project Proposal</button>
                </a>
              </li>
              <li>
              <a href="/ProjectSpecificationsReport.zip" download="ProjectSpecificationsReport">
              <button>Download Project Specifications Report</button>
                </a>
              </li>
              <li>
                <a href="/ProjectAnalysisReport.zip" download="ProjectAnalysisReport">
                  <button>Download Project Analysis Report</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
