const Project = require('../models').Project;
// const City = require('../models').City;
const User = require('../models').User;

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

const createProject = (req, res) => {
    console.log(req.body)
    // req.body.userId = req.user.id;
    req.body.user_project_id = parseInt(req.params.id);
    console.log(req.body)
    Project.create(req.body)
    .then(newProject => {
        console.log(newProject)
        res.status(constants.SUCCESS).json(newProject)
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

const getProjectByUser = (req, res) => {
    Project.findAll({
        
        where: {
            user_project_id: req.params.id
        },
        attributes: ['id', 'project_name', 'class', 'description', 'img', 'user_project_id'],
        // include: [{
        //     model: City
        // }]
        order: ['id']
    })
    .then(allProjects => {
        // console.log(req.params)
        res.status(constants.SUCCESS).json(allProjects)
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

const editProject = (req, res) => {
    Project.update(req.body, {
        where: {
            id: req.params.projectId
        },
        returning: true
    })
    .then(updatedProject => {
        if(updatedProject[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            Project.findByPk(req.params.projectId, {
                include: [
                    // {
                    //     model: City,
                    //     attributes: ['name', 'state', 'img', 'country']
                    // },
                    {
                        model: User,
                        attributes: ['id', 'username']
                    }
                ]
            })
            .then(foundProject => {

                if(foundProject === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
                }else{
                    res.status(constants.SUCCESS).json(foundProject)
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

const deleteProject = (req, res) => {
    Project.findByPk(req.params.projectId)
    // console.log(req.params.projectId)
    // console.log("RIGHT HERE")
    .then(foundProject => {
        console.log(foundProject.user_project_id)
        console.log(req.params.userId)
        if(foundProject.user_project_id === parseInt(req.params.userId)){
            console.log("made it")
            Project.destroy({
                where: {id: req.params.projectId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        } else {
            res.status(constants.FORBIDDEN).send('ERROR: Post not created by User')
        }
    })
    .catch(err => {
        console.log(err)
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createProject,
    // getPostsByCity,
    getProjectByUser,
    // getAllPosts,
    deleteProject,
    editProject,
    // getPostById
}