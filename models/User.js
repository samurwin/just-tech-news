const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define id column
        id: {
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's NOT NULL option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run out data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS
        // pass in our imported sequelize connection
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;