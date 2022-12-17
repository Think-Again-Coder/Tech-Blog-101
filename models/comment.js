const {Model, DataTypes, Sequelize} = require ('sequelize');
const bcrypt = require ('bcrypt');

class comment extends Model{

}
comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commentSection: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {model: "user", key: "id"}
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {model: "post", key: "id"} 
        }
    },
    {
        sequelize, modelName: 'comment'
    }
)
module.exports= comment;