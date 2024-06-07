import { Request, Response } from "express";
import Pedido from "../models/pedido";

export const getPedidos = async (req: Request, res: Response) => {
	try {
		const listProducts = await Pedido.findAll()
		res.json(listProducts)

	} catch (error) {
		return res.status(500).json({ msg: "Error interno de sevidor" })
	}
}

export const getPedido = async (req: Request, res: Response) => {
	try {

		const { id } = req.params
		if (!id || isNaN(Number(id))) {
			return res.status(400).json({ msg: "El id proporcionado no es valido" })
		}
		const pedido = await Pedido.findByPk(id)
		if (pedido) {
			res.json(pedido)
		} else {
			res.status(404).json({ msg: `No existe el pedido con el id:${id} ` })
		}
	} catch (error) {

		return res.status(500).json({ msg: "Error interno de sevidor" })
	}
}
export const deletePedido = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		if (!id || isNaN(Number(id))) {
			return res.status(400).json({ msg: "El id proporcionado no es valido" })
		}
		const pedido = await Pedido.findByPk(id)
		if (pedido) {
			await pedido.destroy()
			res.json({
				msg: "El pedido fue eliminado con exito"
			})
		} else {
			res.status(404).json({ msg: `No existe el pedido con el id:${id} ` })
		}

	} catch (error) {
		return res.status(500).json({ msg: "Error interno de sevidor" })
	}
}

export const postPedido = async (req: Request, res: Response) => {
	const { body } = req
	try {
		await Pedido.create(body)
		res.json({ msg: "El Pedido fue agregado con exito" })

	} catch (error) {
		return res.status(500).json({ msg: "Error interno de sevidor" })
	}
}

export const updatePedido = async (req: Request, res: Response) => {
	const { id } = req.params
	const { body } = req

	try {
		if (!id || isNaN(Number(id))) {
			return res.status(400).json({ msg: "El id proporcionado no es valido" })
		}
		const pedido = await Pedido.findByPk(id)
		if (pedido) {
			await pedido.update(body)
			res.json({ msg: 'El pedido fue actualizado con exito' })
		} else {
			res.status(404).json({ msg: `No existe el pedido con el id:${id} ` })
		}
	} catch (error) {
		return res.status(500).json({ msg: "Error interno de sevidor" })
	}
}