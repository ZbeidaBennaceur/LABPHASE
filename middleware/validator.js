const {check,validationResult} = require ('express-validator')




exports.registerValidation=()=>[
    check("name","Le nom d'utilisateur est obligatoire").not().isEmpty(),
    check("email", "Veuillez entrer une adresse mail valide").isEmail(),
    check("password","Veuillez entrer un mot de passe valide").isLength({min:6,max:15})
.withMessage('Le mot de passe doit contenir au moins 6 caractères')
.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/)
.withMessage('Le mot de passe doit contenir uniquement des lettres et des chiffres, avec au moins une lettre et un chiffre'),
];

exports.loginValidation=()=>[
    check("email", "Veuillez entrer une adresse mail valide").isEmail(),
    check("password","Veuillez entrer un mot de passe valide").isLength({min:6,max:15})
.withMessage('Le mot de passe doit contenir au moins 6 caractères')
.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/)
.withMessage('Le mot de passe doit contenir uniquement des lettres et des chiffres, avec au moins une lettre et un chiffre'),
];


exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
}