// /api/application/

var router = require('express').Router();

router.post("/", (request, response) => {    
    collection.insertOne(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.status(201).send(result);
    })
})

// GET /api/application/:name
router.get("/:name", (request, response) => {
    collection.findOne({ "name": request.params.name }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.json(result)
    })
})

// PUT /api/application/:name
router.put("/:name", (request, response) => {
    collection.updateOne(
        { "name" : request.params.name },
        { $set: request.body },
        { upsert: true},
        (error, result) => {
            if (error) { return response.status(500).send(error) }
            if (result.result.nModified === 1 && result.result.n === 1) response.status(200).send(result.result)
            else if ( result.result.upserted ) response.status(201).send(result.result)
            else if (result.result.n === 1 && result.result.nModified === 0 ) response.status(304).send(result.result)
        }
     )
})

// DELETE /api/application/:name
router.delete("/:name", (request, response) => {
    collection.deleteOne({ "name": request.params.name }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.json(result);
    })
})

module.exports = router; 