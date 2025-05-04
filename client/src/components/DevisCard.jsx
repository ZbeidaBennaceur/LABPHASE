import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {editPiscine } from '../JS/actions/piscineAction';
import EditPiscine from './EditPiscine';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ToSupprimerDevis from './ToSupprimerDevis';



const DevisCard = ({ piscine, index,devis}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
 

  const formatDevisNumber = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(-2);
    return `${day}${month}${year}`;
  };

  const [supprimer,setSupprimer]=useState(false)


  const handleSave = (updatedPiscine) => {
    dispatch(editPiscine(updatedPiscine._id, updatedPiscine));
  };

  const handlePrintPDF = () => {
    const input = document.getElementById(`devis-card-${piscine._id}`);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`devis-${formatDevisNumber(piscine.createdAt)}.pdf`);
    });
  };

 

  return (
    <div>
      <Card style={{ marginTop: '2em' }}>
        <div id={`devis-card-${piscine._id}`}>
          <Card.Header>Devis n° {formatDevisNumber(piscine.createdAt)}-000{index + 1}</Card.Header>
          <Card.Body>
            <Card.Text><strong>Forme :</strong> {piscine.forme}</Card.Text>
            <Card.Text>
              {piscine.forme === "Ronde" ? (
                <>
                  <strong>Diamètre :</strong> {piscine.diametre} m
                </>
              ) : (
                <>
                  <strong>Dimensions :</strong> {piscine.longueur} m x {piscine.largeur} m
                </>
              )}
            </Card.Text>
            <Card.Text><strong>Profondeur :</strong> {piscine.profondeur} m</Card.Text>
            <Card.Text><strong>Système :</strong> {piscine.systeme}</Card.Text>
            <Card.Text><strong>Couleur de revêtement :</strong> {piscine.couleur}</Card.Text>
            <Card.Text><strong>Type de margelle :</strong> {piscine.margelle}</Card.Text>
            <Card.Text><strong>Type de filtration :</strong> {piscine.filtration}</Card.Text>
            <Card.Text><strong>Local technique :</strong> {piscine.local}</Card.Text>
            <Card.Text><strong>Type de couverture :</strong> {piscine.couverture}</Card.Text>
            <Card.Text><strong>Type d'éclairage :</strong> {piscine.eclairage}</Card.Text>
            <hr />
            <p><strong>Prix estimé :</strong> {Number(devis).toFixed(2)} DT</p>
          </Card.Body>
        </div>
  
        {/* Boutons en dehors de la zone à capturer */}
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Button className="buttonsecondaryedit" variant="primary" onClick={() => setShowModal(true)}>
              Modifier
            </Button>
            <Button className="buttonsecondarydel" variant="danger" onClick={()=>{setSupprimer(true)}} style={{ marginLeft: '1em' }}>
              Supprimer
            </Button>
            <Button className="buttonsecondaryimp" variant="secondary" onClick={handlePrintPDF} style={{ marginLeft: '1em' }}>
              Imprimer en PDF
            </Button>
          </div>
        </Card.Body>
      </Card>
  
      <EditPiscine
        devis={piscine}
        handleSave={handleSave}
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
       <ToSupprimerDevis
  show={supprimer}
  handleClose={() => setSupprimer(false)}
  piscine={piscine}
/>
    </div>
    
  );
}
export default DevisCard;

