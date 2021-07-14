import jwt from 'jsonwebtoken'


const authMiddleware = async (req, res, next) =>{
    try{
        // console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1]
        const isCustomAuth = token.length < 500   //Google Auth

        let decodedData;

        if(token && isCustomAuth)
        {
            decodedData = jwt.verify(token, 'test')  //give data of each specific token for our creating user

            req.userId = decodedData?.id
        }
        else{
            decodedData = jwt.decode(token) // for google auth data
            req.userId = decodedData?.sub;  // sub is google namefor specific_id, differentiates every single google user
        }
        next()
    }
    catch(error){

    }
}

export default authMiddleware;