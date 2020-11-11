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

// const createPost = (req, res) => {
//     req.body.userId = req.user.id;
//     req.body.cityId = req.params.city;

//     Post.create(req.body)
//     .then(newPost => {
//         res.status(constants.SUCCESS).json(newPost)
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

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
        attributes: ['project_id', 'project_name', 'class', 'description', 'img', 'user_project_id'],
        // include: [{
        //     model: City
        // }]
    })
    .then(allProjects => {
        console.log(req.params)
        res.status(constants.SUCCESS).json(allProjects)
    })
    .catch(err => {
        console.log(err)
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

// const editPost = (req, res) => {
//     Post.update(req.body, {
//         where: {
//             id: req.params.postId
//         },
//         returning: true
//     })
//     .then(updatedPost => {
//         if(updatedPost[0] === 0){
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
//         }else{
//             Post.findByPk(req.params.postId, {
//                 include: [
//                     {
//                         model: City,
//                         attributes: ['name', 'state', 'img', 'country']
//                     },
//                     {
//                         model: User,
//                         attributes: ['id', 'username']
//                     }
//                 ]
//             })
//             .then(foundPost => {
//                 if(foundPost === null){
//                     res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
//                 }else{
//                     res.status(constants.SUCCESS).json(foundPost)
//                 }
//             })
//             .catch(err => {
//                 res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//             })
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

// const deletePost = (req, res) => {
//     Post.findByPk(req.params.postId)
//     .then(foundPost => {
//         if(foundPost.userId === req.user.id){
//             Post.destroy({
//                 where: {id: req.params.postId}
//             })
//             .then(() => {
//                 res.status(constants.SUCCESS).send('success')
//             })
//         } else {
//             res.status(constants.FORBIDDEN).send('ERROR: Post not created by User')
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

module.exports = {
    // createPost,
    // getPostsByCity,
    getProjectByUser,
    // getAllPosts,
    // deletePost,
    // editPost,
    // getPostById
}