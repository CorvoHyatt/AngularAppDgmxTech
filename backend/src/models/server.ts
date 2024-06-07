import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import db from '../db/connection'
import routesPedidos from '../routes/pedidos.routes'

export class Server {
	private app: Application
	private port: string
	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3001'
		this.listen()
		this.midlewares()
		this.router()
		this.dbConnect()
	}
	listen() {
		this.app.listen(this.port, () => {
			console.log('listening on port ' + this.port)
		})
	}

	router() {
		this.app.get('/', (req: Request, res: Response) => {
			res.json({
				msg: 'API Working'
			})
		})
		this.app.use('/api/pedidos', routesPedidos)
	}
	midlewares() {
		//Parsear el body
		this.app.use(express.json())
		//CORS
		this.app.use(cors())
	}
	async dbConnect() {
		try {
			await db.authenticate()
			console.log('Base de datos conectada');

		} catch (error) {
			console.log(error);
			console.log('Error al conectarse a la base de datos');
		}
	}
}
