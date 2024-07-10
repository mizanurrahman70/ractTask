// src/SecondPage.tsx
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Posts from './Posts';
import DepartmentList from './DepartmentList';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      alert('You must enter your details before accessing this page.');
      navigate('/');
    }
  }, [navigate]);

  return (
<>
<div>
    
      
    </div>
   <Posts></Posts>
   <DepartmentList></DepartmentList>
    
    </>
  );
};

export default SecondPage;
