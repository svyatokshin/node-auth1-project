module.exports = (req, res, next) => {
    // we will check that we remember the client here. That the client logged in already
    // use express-session to remember client
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ you: "shall not pass!"})
    }

    
}