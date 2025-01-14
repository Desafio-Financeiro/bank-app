import type { EditTransacao } from "./types";

export async function updateTransacao(
  id: string,
  transacaoAtualizada: EditTransacao,
) {
  const url = `${process.env.BASE_URL}/transacao/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transacaoAtualizada),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar transação: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar transação:", error);
    throw error;
  }
}

export async function deleteTransacao(id: string) {
  const url = `${process.env.BASE_URL}/transacao/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar transação: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Erro ao deletar transação:", error);
    throw error;
  }
}
