import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyPiscines } from '../JS/actions/piscineAction'
import DevisCard from '../components/DevisCard'
import { calculerPrixPiscine } from '../utils/calculDevis';

const MesDevis = () => {

  const dispatch = useDispatch()

  const myPiscines = useSelector(state => state.piscineReducer.myPiscines)
  const loading = useSelector(state => state.piscineReducer.loadP)

  useEffect(() => {
    dispatch(getMyPiscines())
  }, [dispatch])
 // console.log(" Rendering MesDevis avec :", myPiscines);
  return (
    <div style={{ padding: '30px' }}>
      <h2 className="text-center mb-4">Mes Devis</h2>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : myPiscines?.length === 0 ? (
        <p className="text-center">Aucun devis enregistré pour le moment.</p>
      ) : (
        myPiscines.map((piscine, index) => (
          <DevisCard key={piscine._id} piscine={piscine} index={index} devis={calculerPrixPiscine(piscine)}/>
        ))
      
      )}
    </div>
  )
}

export default MesDevis
