import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Pedido = db.define('Pedido',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,

		},
		titulo: {
			type: DataTypes.STRING
		},
		descripcion: {
			type: DataTypes.STRING
		},
	},
	{
		createdAt: false,
		updatedAt: false
	}
)

export default Pedido