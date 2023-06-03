import * as service from '../../services/products.reviews.services.js'

function getReviews(req, res) {
    const idProduct = req.params.idProduct

    service.getReviews(idProduct)
        .then(function (reviews) {
            if (reviews) {
                res.status(200).json(reviews)
            }
            else {
                res.status(200).json({ product_id: idProduct, reviews: [] })
            }

        })

}


function createReview(req, res) {

    const idProduct = req.params.idProduct

    const review = {
        author: req.body.author,
        comment: req.body.comment,
        date: new Date(),
        score: req.body.score
    }

    service.createReview(idProduct, review)
        .then(function (review) {
            res.status(201).json(review)
        })

}


export {
    getReviews,
    createReview
}