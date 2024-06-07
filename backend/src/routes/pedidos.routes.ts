import { Router } from "express";
import { getPedido, getPedidos, deletePedido, postPedido, updatePedido } from "../controllers/pedidos.controller";

const router = Router();

router.get('/', getPedidos)
router.get("/:id", getPedido)
router.delete("/:id", deletePedido)
router.post("/", postPedido)
router.put("/:id", updatePedido)
export default router