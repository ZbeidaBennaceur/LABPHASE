
const User = require ('../model/User')



exports.getAllUsers=async(req,res)=>{
    try {
        const listUsers=await User.find()
        res.status(200).json({success:{msg:"La liste de tous les utilisateurs"},listUsers})
        
    } catch (error) {
        res.status(400).json({errors:{msg:"Utilisateurs non trouvés"}})
        
    }
}


exports.deleteUser=async(req,res)=>{
    try {
        const{id}=req.params;
        const UserToDelete=await User.findByIdAndDelete(id);
        if(!UserToDelete) {
            return res.status(400).json({
                errors:{msg:"L'utilisateur n'existe pas dans la base de données"}
            })
        }
        res.status(200).json({success:{msg:"Suppression de l'utilisateur faite avec succès"},UserToDelete})

    } catch (error) {
        res.status(400).json({errors:{msg:"Echec de la suppression"}})
    }
}

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Erreur serveur" }] });
  }
};