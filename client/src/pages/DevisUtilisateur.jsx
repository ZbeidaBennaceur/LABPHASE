import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DevisCard from '../components/DevisCard'
import { getAllpiscines } from '../JS/actions/piscineAction'
import { calculerPrixPiscine } from '../utils/calculDevis'

const DevisUtilisateur = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()

  const allPiscine = useSelector(state => state.piscine.Allpiscines)
  const loading = useSelector(state => state.piscine.loadP)

  useEffect(() => {
    dispatch(getAllpiscines())
  }, [dispatch])

  const userDevis = allPiscine.filter(p => p.user?.toString() === userId)
 // console.log(userDevis[0]);
  return (
    <div style={{ padding: '30px' }}>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        userDevis.map((piscine, index) => (
          <div key={piscine._id}>
            <DevisCard
              piscine={piscine}
              index={index}
              devis={calculerPrixPiscine(piscine)}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default DevisUtilisateur
