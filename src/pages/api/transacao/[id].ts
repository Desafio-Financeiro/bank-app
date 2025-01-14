import type { NextApiRequest, NextApiResponse } from "next";
import {
  updateTransacao,
  deleteTransacao,
} from "@/lib/apiTransacaoClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query; // Obtém o ID dos parâmetros da URL

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "ID inválido ou ausente." });
  }

  try {
    if (req.method === "PUT") {
      // Atualizar transação
      const updatedTransacao = req.body;
      const data = await updateTransacao(id, updatedTransacao);
      return res.status(200).json(data);
    }

    if (req.method === "DELETE") {
      // Deletar transação
      await deleteTransacao(id);
      return res.status(200).json({ message: "Transação deletada com sucesso." });
    }

    // Método não permitido
    res.setHeader("Allow", ["PUT", "DELETE"]);
    return res.status(405).end(`Método ${req.method} não permitido.`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}
