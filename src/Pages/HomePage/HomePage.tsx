import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

import '../HomePage/HomePage.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="image-container">

        <div className="overlay-text">
          <h1>Project Overview</h1>
          <div>The JustiWise platform presents a transformative approach to improving legal processes, and advancing legal education. By integrating advanced AI technologies with intuitive interfaces, the platform automates repetitive legal tasks, provides dynamic training environments, and enhances overall efficiency in the legal field. It specifically addresses critical issues such as the heavy workload faced by lawyers, barriers to accessing legal services, and the absence of interactive, hands-on training tools for law students and professionals.
Key features of the platform include:
a- AI-powered tools that translate client narratives into structured legal terminology, facilitating flawless communication between clients and lawyers.
b- Interactive training modules and simulations designed to prepare law students and legal professionals for real-world scenarios. 
</div>

          <h1>Project Objective</h1>
          <div>To reduce lawyers' workload, enable them to focus on more complex tasks, and improve efficiency by offering automated services (consultation) to clients. This AI-powered system will provide clients with legal guidance, analyze documents, and predict case outcomes. It will also offer features for lawyers and law students.</div>

          <h1>Features</h1>
          <ul className='funct-list'>
            <h2>Functional Features</h2>
            <li>Registration & Login: Users can create an account and log in.</li>
            <li>Personal Information Entry (Optional): Clients can save previous cases or personal information.</li>
            <li>Section Selection: Users choose a legal branch (criminal law, commercial law, etc.), and the AI provides services in this area.</li>
            <li>Example Prompts: Quick start examples for frequently asked questions.</li>
            <li>Start New Chat: Clients can open a new chat to ask a legal question.</li>
            <li>Past Conversations: Clients can access their previous conversations.</li>
            <li>Document Summary: Clients upload a document, and the AI provides a concise summary.</li>
            <li>Contract Creation: The AI generates templates for various contract types.</li>
            <li>Example Document: Ready-made templates for consumer rights applications.</li>
            <li>Petition Writing: The AI creates a petition based on the information provided by the lawyer.</li>
            <li>Training Module: Lawyers upload work documents, and the AI summarizes them and creates quizzes.</li>

            <h2>AI Features</h2>
            <li>Document Analysis: The AI analyzes and summarizes the documents uploaded by users, providing information on risks and liabilities.</li>
            <li> Legal Education Platform: Provides users with basic legal information, interactive quizzes, and educational articles. </li>
            <li>AI-Powered Arbitration: The AI suggests fair resolutions for minor legal disputes between two parties.</li>
            <li>Personalized Guidance: Clients receive personalized legal guidance through interactions with an AI avatar supported by natural language processing (NLP).</li>
          </ul>

          <h1>Technologies</h1>
          <ul className='tech-list'>
            <h2>Backend</h2>
            <li>Java Spring Boot</li>
            <li>Python</li>
            <li>PostreSQL</li>

            <h2>Frontend</h2>
            <li>Typescript</li>
            <li>React</li>
            <li>Axios</li>


          </ul>

          <h1>Conclusion</h1>
          <div>
            {/* Dosya indirme butonları */}
            <h1>Project Downloads</h1>
            <ul>
              <li>
                <a
                  href="https://finalprojectjustiwise.github.io/CMPE_491/ProjectProposal.zip"
                  download="ProjectProposal"
                >
                  <button>Download Project Proposal</button>
                </a>
              </li>
              <li>
                <a
                  href="https://finalprojectjustiwise.github.io/CMPE_491/ProjectSpecificationsReport.zip"
                  download="ProjectSpecificationsReport"
                >
                  <button>Download Project Specifications Report</button>
                </a>
              </li>
              <li>
                <a
                  href="https://finalprojectjustiwise.github.io/CMPE_491/ProjectAnalysisReport.zip"
                  download="ProjectAnalysisReport"
                >
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
