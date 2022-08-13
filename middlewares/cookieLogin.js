const path = require('path');

const cookieLogin = (req, res, next) => {
    if(req.cookies.logado != undefined && req.session.user == undefined){
        let email = req.cookies.logado;

        async (req, res) => {
            let { email } = req.body;

            let user = await Client.findOne({
                where:{
                    email_login: email}
            });

        if(user.email == email) {
            req.session.user = user;
        }
            next();
}
}
}

module.exports = cookieLogin;