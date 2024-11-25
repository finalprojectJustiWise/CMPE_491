import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './PDFPage.css';
import Navbar from '../../Components/Navbar/Navbar';


const pdfFiles = [
  { name: "Project Specifications", path: require('../../Assets/ProjectSpecificationsReport.pdf') },
  { name: "Project Analysis", path: require('../../Assets/ProjectAnalysisReport.pdf') },
  { name: "Project Proposal", path: require('../../Assets/ProjectProposal.pdf') },
];

const PDFPage = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(pdfFiles[0].path); 

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (numPages && pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const handleFileSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPath = event.target.value;
    setSelectedFile(selectedPath);  
    setPageNumber(1);  
  };

  return (
    <div className="pdf-container">
      <Navbar />
      <div className="file-picker-container">
        <h3>Select a PDF File:</h3>
        <select onChange={handleFileSelection} className="file-picker">
          {pdfFiles.map((file, index) => (
            <option key={index} value={file.path}>
              {file.name}
            </option>
          ))}
        </select>
      </div>

      {selectedFile && (
        <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      )}

      <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={goToNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFPage;
