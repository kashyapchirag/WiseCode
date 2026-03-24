import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export const protect = async (req, res, next) => {
    try {

        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Not Authorized" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();

    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" })
    }
}