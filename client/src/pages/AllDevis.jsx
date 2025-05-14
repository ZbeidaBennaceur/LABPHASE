import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DevisCard from '../components/DevisCard'
import { calculerPrixPiscine } from '../utils/calculDevis';
import { getAllpiscines } from '../JS/actions/piscineAction';


const AllDevis = () => {
  const dispatch = useDispatch()

  const allPiscine = useSelector(state => state.piscine.Allpiscines)
  const loading = useSelector(state => state.piscine.loadP)

  useEffect(() => {
    dispatch(getAllpiscines())
    
  }, [dispatch])
  console.log(allPiscine)
  return (
    <div style={{ padding: '30px' }}>
      <h2 className="text-center mb-4">Devis de tous les utilisateurs</h2>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : allPiscine?.length === 0 ? (
        <p className="text-center">Aucun devis enregistré pour le moment.</p>
      ) : (
        allPiscine.map((piscine, index) => (
          <div>
          <DevisCard key={piscine._id} piscine={piscine} index={index} devis={calculerPrixPiscine(piscine)}/>
          </div>
        ))
      
      )}
    </div>
  
  )
  
}

export default AllDevis