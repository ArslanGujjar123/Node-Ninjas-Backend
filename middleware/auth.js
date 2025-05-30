const jwt = require('jsonwebtoken');

const protectRoute = (roles = []) => {
    return (req, res, next) => {
        const authHeader = req.headers.Authorization;


        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization denied' });
        }

        const token = authHeader.split(' ')[2]; // Extract the token after 'Bearer '

        try {
            // Decode and verify the JWT token
            const decoded = jwt.verify(token, process.env.SECRET_KEY); // Ensure you are using the correct secret

            req.user = decoded; // Attach the decoded user data to the request object

            // Check if the user has the required roles (if any are provided)
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Forbidden: You do not have access to this resource' });
            }

            next(); // Proceed to the next middleware or route handler
        } catch (err) {
            return res.status(401).json({ message: 'Token is not valid' });
        }
    };
};

module.exports = protectRoute;