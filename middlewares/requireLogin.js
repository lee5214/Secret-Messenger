module.exports = (req,res,next) => { //next middleware is called when current middleware finished
  if(!req.user){
    return res.status(401).send({error:'You need to log in'})
  }
  next()
}