import React, { useEffect, useState } from 'react';
import "../styles/azureaenchiffre.css"

const AzureaEnChiffre = ({ targetNumber =4200, duration = 2000, targetNumberP=5400,targetNumberRDV=6200 }) => {
  const [count, setCount] = useState(0);
  const [countP, setCountP] = useState(0);
  const [countRDV,setCountRDV]=useState(0)
  const [textColor, setTextColor] = useState('#aaa')

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
        setTextColor('#333'); 
      } else {
        setCount(Math.floor(start));
    
      }
    }, 10);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);


  useEffect(() => {
    let start = 0;
    const incrementP = targetNumberP / (duration / 10);
    const timerP = setInterval(() => {
      start += incrementP;
      if (start >= targetNumberP) {
        setCountP(targetNumberP);
        clearInterval(timerP);
        setTextColor('#333'); 
      } else {
        setCountP(Math.floor(start));

      }
    }, 10);

    return () => clearInterval(timerP);
  }, [targetNumberP, duration]);


  useEffect(() => {
    let start = 0;
    const incrementRDV = targetNumberRDV / (duration / 10);
    const timerRDV = setInterval(() => {
      start += incrementRDV;
      if (start >= targetNumberRDV) {
        setCount(targetNumberRDV);
        clearInterval(timerRDV);
        setTextColor('#333'); 
      } else {
        setCountRDV(Math.floor(start));

      }
    }, 10);

    return () => clearInterval(timerRDV);
  }, [targetNumberRDV, duration]);

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '180px', flexWrap: 'wrap', padding: '40px' }}>

    <div className="TitreEnChiffre" >
     <span style={{ color: textColor,fontSize:"4rem" }}>{count.toLocaleString()}</span><br/>Piscines construites
    </div>

    <div className="TitreEnChiffre" >
     <span style={{ color: textColor,fontSize:"4rem" }}>{countP.toLocaleString()}</span><br/>Clients satisfaits
    </div>

    <div className="TitreEnChiffre" >
     <span style={{ color: textColor,fontSize:"4rem" }}>{countRDV.toLocaleString()}</span><br/>Rendez-vous pris
     </div>
    </div>
</>

    
  );
};

export default AzureaEnChiffre;

