import * as services from '../../services/account.service.js'

async function createAccount(req, res) {
    return services.createAccount(req.body)
        .then(() => {
            res.status(201).json({ message: "Cuenta creada correctamente." })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function login(req, res) {
    return services.login(req.body)
        .then((account) => {
            res.status(201).json({ message: "Cuenta encontrada con exito.", account })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

export {
    createAccount,
    login
}