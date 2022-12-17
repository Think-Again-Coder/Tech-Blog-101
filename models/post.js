const {Model, DataTypes, Sequelize} = require ('sequelize');
const bcrypt = require ('bcrypt');
//brings in sequelize and bcrypt above this line and outlines the post model below. 
class post extends Model
    {
        
    }
post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
         },
         title: {
            type: DataTypes.STRING,
            allowNull: false
         },
         content: {
            type: DataTypes.STRING,
            allowNull: false  
         },
         user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: {id}
            }
         }
    },
    {
        sequelize, 
        modelName: "post"
    }
)

module.exports= post;
