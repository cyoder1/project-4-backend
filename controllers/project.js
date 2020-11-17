const Project = require('../models').Project;
const User = require('../models').User;

const constants = require('../constants');


const createProject = (req, res) => {
    // req.body.userId = req.user.id;
    req.body.user_project_id = parseInt(req.params.id);
    Project.create(req.body)
    .then(newProject => {
        res.status(constants.SUCCESS).json(newProject)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}


const getProjectByUser = (req, res) => {
    Project.findAll({
        
        where: {
            user_project_id: req.params.id
        },
        attributes: ['id', 'project_name', 'class', 'description', 'img', 'user_project_id'],
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
        // console.log(foundProject.user_project_id)
        // console.log(req.params.userId)
        if(foundProject.user_project_id === parseInt(req.params.userId)){
            // console.log("made it")
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
        // console.log(err)
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createProject,
    getProjectByUser,
    deleteProject,
    editProject,
}