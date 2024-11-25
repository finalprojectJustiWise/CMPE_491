import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import file from '../../Assets/ProjectSpecificationsReport.pdf';
import './PDFPage.css';
import Navbar from '../../Components/Navbar/Navbar';



const PDFPage = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (numPages && pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  return (
    <div className="pdf-container">
      <Navbar/>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
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
