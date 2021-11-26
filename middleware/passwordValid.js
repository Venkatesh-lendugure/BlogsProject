function isPass(req, res, next) {
    const password = req.body.Password;
    //console.log(password.length);
    if (password.length == 0) {
        res.send('password is should not be empty');
    } else if (password == " ") {
        res.send('Password should not be given empty');
    } else if ((password.length >= 5) && (password.length <= 15)) {
        let c = 0;
        for (let i = 0; i < password.length; i++) {
            if (password[i] == " ") c++;
        }
        if (c == 0) next();
        else res.send('in Between password should not give spaces');
    } else res.send('Given password is not in the range of 8 to 15');
}
module.exports = isPass;