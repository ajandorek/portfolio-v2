import React from 'react';
import FadeIn from 'react-fade-in';
import PDF from 'react-pdf-js';
import PDFResume from '../files/resume.pdf';

const Resume = () => (
  <PDF 
    className='resume'
    file={PDFResume}
  />
)

export default Resume;