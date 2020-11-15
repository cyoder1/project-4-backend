const Cost = require('../models').cost;
// const City = require('../models').City;
const User = require('../models').User;
const Project = require('../models').Project;

const constants = require('../constants');

// const getAllPosts = (req, res) => {
//     Post.findAll({
//         attributes: ['id', 'title', 'body', 'img'],
//         include: [
//             {
//                 model: City
//             }
//         ]
//     })
//     .then(allPosts => {
//         res.status(constants.SUCCESS).json(allPosts)
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

// const getPostById = (req, res) => {
//     Post.findByPk(req.params.postId)
//     .then(foundPost => {
//         if(foundPost === null){
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
//         }else{
//             res.status(constants.SUCCESS).json(foundPost)
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

const createCost = (req, res) => {
    console.log(req.body)
    // req.body.userId = req.user.id;
    req.body.project_cost_id = parseInt(req.params.id);
    console.log(req.body)
    Cost.create(req.body)
    .then(newCost => {
        console.log(newCost)
        res.status(constants.SUCCESS).json(newCost)
    })
    .catch(err => {
        console.log(err)
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

// const getPostsByCity = (req, res) => {
//     Post.findAll({
//         where: {
//             cityId: req.params.city
//         },
//         attributes: ['id', 'title', 'body', 'cityId', 'img']
//     })
//     .then(allPosts => {
//         if(allPosts.length > 0){
//             res.status(constants.SUCCESS).json(allPosts);
//         }else{
//             res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect City Id`);
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

const getCostByProject = (req, res) => {
    Cost.findAll({
        
        where: {
            project_cost_id: req.params.id
        },
        attributes: ['id', 'cost_desc', 'date', 'amount', 'project_cost_id'],
        // include: [{
        //     model: City
        // }]
        order: ['createdAt']
    })
    .then(allCosts => {
        // console.log(req.params)
        res.status(constants.SUCCESS).json(allCosts)
    })
    .catch(err => {
        // console.log(err)
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })

    // Project.findAll()
    // .then(projects => {
    //     console.log(projects)
    //     res.status(constants.SUCCESS).json(projects)
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    // })
}

const editCost = (req, res) => {
    Cost.update(req.body, {
        where: {
            id: req.params.costId
        },
        returning: true
    })
    .then(updatedProject => {
        console.log(req.params.costId)
        if(updatedProject[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            Cost.findByPk(req.params.costId, {
                include: [
                    // {
                    //     model: City,
                    //     attributes: ['name', 'state', 'img', 'country']
                    // },
                    // {
                    //     model: User,
                    //     attributes: ['id', 'username']
                    // }
                ]
            })
            .then(foundCost => {
                console.log("right here")
                console.log(foundCost)
                if(foundCost === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
                }else{
                    res.status(constants.SUCCESS).json(foundCost)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteCost = (req, res) => {
    Cost.findByPk(req.params.costId)
    // console.log(req.params.projectId)
    // console.log("RIGHT HERE")
    .then(foundCost => {
        // console.log(foundProject.user_project_id)
        // console.log(req.params.userId)
        if(foundCost.project_cost_id === parseInt(req.params.projectId)){
            console.log("made it")
            Cost.destroy({
                where: {id: req.params.costId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        } else {
            res.status(constants.FORBIDDEN).send('ERROR: Post not created by User')
        }
    })
    .catch(err => {
        // console.log(err)
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createCost,
    // getPostsByCity,
    getCostByProject,
    // getAllPosts,
    deleteCost,
    editCost,
    // getPostById
}