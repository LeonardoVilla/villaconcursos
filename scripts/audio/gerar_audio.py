"""Gera as faixas MP3 das pílulas de áudio a partir de scripts/audio/roteiros*.json.

Voz: pt-BR-FranciscaNeural (a mesma das faixas já publicadas).
Uso:
    pip install edge-tts
    python scripts/audio/gerar_audio.py                # gera as faixas que faltam
    python scripts/audio/gerar_audio.py mt-historia-1  # gera só a faixa indicada (sobrescreve)
"""
import asyncio
import json
import sys
from pathlib import Path

import edge_tts

RAIZ = Path(__file__).resolve().parents[2]
PASTA = RAIZ / "scripts" / "audio"
SAIDA = RAIZ / "public" / "audio"
VOZ = "pt-BR-FranciscaNeural"


def carregar_roteiros() -> list[dict]:
    itens: list[dict] = []
    for arquivo in sorted(PASTA.glob("roteiros*.json")):
        itens.extend(json.loads(arquivo.read_text(encoding="utf-8")))
    return itens


async def gerar(stem: str, texto: str) -> None:
    destino = SAIDA / f"{stem}.mp3"
    await edge_tts.Communicate(texto, VOZ).save(str(destino))
    print(f"{stem}: {destino.stat().st_size} bytes")


async def main() -> None:
    pedidos = set(sys.argv[1:])
    for item in carregar_roteiros():
        destino = SAIDA / f"{item['stem']}.mp3"
        if pedidos and item["stem"] not in pedidos:
            continue
        if not pedidos and destino.exists():
            continue
        await gerar(item["stem"], item["text"])


if __name__ == "__main__":
    asyncio.run(main())
