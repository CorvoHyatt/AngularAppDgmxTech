import { Sequelize } from "sequelize";
const sequelize = new Sequelize('dgmxtech', 'root', '', {
	host: 'localhost',
	dialect: "mysql",
	logging: false
});

export default sequelize