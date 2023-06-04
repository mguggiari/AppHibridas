import * as accountSchemas from '../schemas/account.schemas.js'

async function validateAccount(req, res, next) {
    return accountSchemas.account.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then((accaunt) => {
            res.body = accaunt
            next()
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

export {
    validateAccount
}