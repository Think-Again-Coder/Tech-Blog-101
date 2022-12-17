const {Model, DataTypes, Sequelize} = require ('sequelize');
const bcrypt = require ('bcrypt')
//brings in sequelize and bcrypt above with user model below that includes username and password.
class user extends Model{

}
user.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
         },
         username: {
            type: DataTypes.STRING,
            allowNull: false 
    
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false    
         }
    }, 
    {    
        sequelize, 
         modelName: 'user'

    }
)
module.exports= user;

