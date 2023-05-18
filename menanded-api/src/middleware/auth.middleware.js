const JWT = require('jsonwebtoken');
const response = require('express');
const { secret } = require('../config');


const verifyJwToken = (req, res = response, next) => {
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).json({message:"No se envió el token"});
    }
    JWT.verify(token, secret, (err, decoded) => {
        if(err){
            return res.status(401).json({message: "No estas autorizado"});
        }
        req.decoded_id = decoded.id;
        next();
    });
}


module.exports = {
    verifyJwToken
};