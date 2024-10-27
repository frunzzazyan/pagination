class UsersControllers{
    async getUsers(req,res){
        try {
            const users = await req.app.locals.services.users.getUsers()
            res.status(200).json(users)
        } catch (error) {
            res.status(404).json(error)
        }
    }
    async getPage(req,res){
        try {
            const usersPage = await req.app.locals.services.users.getPage(req.params.page)
            res.status(200).json(usersPage)
        } catch (error) {
            res.status(404).json(error)
        }
    }
    
    async sortUsersAge(req,res){
        try {
            const usersSort = await req.app.locals.services.users.sortUsersAge()
            res.status(200).json(usersSort)
        } catch (error) {
            res.status(404).json(error)
        }
    }
}

module.exports = UsersControllers