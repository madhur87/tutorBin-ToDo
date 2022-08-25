module.exports = async(req,res)=>{
    try{
    res.send(req.body);
    }catch(err){
        res.send(err);
    }

}