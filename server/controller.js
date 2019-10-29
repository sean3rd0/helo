const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db')

        const userAlreadyExists = await db.check_for_username(username)
        userAlreadyExists = userAlreadyExists[0]
        
        if(userAlreadyExists) {
            res.status(409).send("Username already exists")
        }

        const newUser = await db.register({username, password: bcrypt.hashSync(password, bcrypt.genSaltSync(1))}) /* this is... not what I have to do haha but it's what I'd do if the password's varchar was like 250 and it was actually my own project */
        newUser = newUser[0] //the response sits in an array, so we just do this to access that object... which is in an array. 
    
        req.session.user = {...newUser}
        res.status(200).send(req.session.user)
    }, 

    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        const foundUser = await db.check_for_username(username)
        foundUser = foundUser[0]

        if(!foundUser){
            res.status(401).send('Username not yet registered.')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)

        if(authenticated){
            delete foundUser.password;
            req.session.user = foundUser;
            res.status(202).send(req.session.user)
        } else {
            res.status(401).send('Password is incorrect')
        }
    }
}