import React from 'react';
import PDF from 'react-pdf-js';
import PDFResume from '../files/resume.pdf';

const Resume = () => (
  <PDF 
    className='resume'
    file={PDFResume}
  />
)

export default Resume;