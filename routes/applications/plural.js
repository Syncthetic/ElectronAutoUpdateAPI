
var router = require('express').Router();

// GET /api/applications
router.get("/", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    })
})  

// DELETE /api/applications
router.delete("/", (request, response) => {
    collection.deleteMany({}, (error, result) => {
        if (error) router.status(500).send(error)
        response.json(result)
    })
})

// In a real application, this would be done programmatically
router.put("/", (request, response) => {
    response.status(405).send({error: "PUT method not allowed"})
})

router.patch("/", (request, response) => {
    response.status(405).send({error: "PATCH method not allowed"})
})
module.exports = router; 