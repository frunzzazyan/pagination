class UsersServices{
    constructor(models){
        this.models = models
    }

    async getUsers(){
        const users = await this.models.users.find()
        return users
    }

    async getPage(page){
        let start = `${page.slice(4)}0` - 10

            const users = await this.models.users.find().skip(start).limit(10)
            return users
    }

    async sortUsersAge(){
        const sortUsers = await this.models.users.find().sort( { age : -1, age: 1 })
        return sortUsers
    }
}

module.exports = UsersServices