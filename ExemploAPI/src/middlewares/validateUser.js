  const validateUser = (req,res,next) =>{
    const {nome, email } = req.body;

if (!nome || typeof nome !== 'string') {
return res.status(400).json ({msg: 'campos invalidos'});

}

if (!nome || typeof nome !== 'string') {
    return res.status(400).json ({msg: 'campos invalidos'});

}
    if (!(email.includes('@') && email.includes("."))) {
        return res.status(400).json ({msg: 'campos invalidos'});
    }

        next();
  }
        const validateUserId = (req,res,next) =>{
            const { id } = req.params;

            if (!id || typeof id !== 'string') {
                return res.status(400).json ({msg: 'Parametro id invalidos'});

            }
            next();

  }

 
  

  module.exports =  {validateUser, validateUserId}

