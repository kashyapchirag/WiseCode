import jwt from 'jsonwebtoken'

export const protect = async (req, res, next) => {
    try {

        // const token = req.cookies.token;
        const token = req.headers.authorization?.split(" ")[1];
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

export const optionalAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        }
    } catch (err) {
        // ignore errors
    }
    next();
};