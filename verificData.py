import re
import ast
from collections import defaultdict

def carregar_relations_js(caminho_arquivo):
    with open(caminho_arquivo, "r", encoding="utf-8") as f:
        conteudo = f.read()

    # pega tudo dentro de const relations = [ ... ];
    match = re.search(r'const\s+relations\s*=\s*(\[[\s\S]*?\]);', conteudo)

    if not match:
        raise ValueError("Não foi possível encontrar 'relations' no arquivo.")

    array_js = match.group(1)

    # remove comentários JS (// ...)
    array_js = re.sub(r'//.*', '', array_js)

    # transforma em algo compatível com Python
    # troca aspas simples por duplas (se houver)
    array_js = array_js.replace("'", '"')

    # converte para lista Python
    relations = ast.literal_eval(array_js)

    return relations


def verificar_duplicados(relations):
    contador = defaultdict(int)

    for parent, child in relations:
        chave = (parent, child)
        contador[chave] += 1

    duplicados = [(rel, count) for rel, count in contador.items() if count > 1]
    duplicados.sort(key=lambda x: x[1], reverse=True)

    if not duplicados:
        print("\033[31mNenhum item duplicado encontrado!\033[0m")
    else:
        print("Itens duplicados:\n")
        for (parent, child), count in duplicados:
            print(f"[{parent}, {child} | repetições: {count}")

        print(f"\nTotal de duplicados: {len(duplicados)}")


# EXECUÇÃO
if __name__ == "__main__":
    relations = carregar_relations_js("dendrograma.js")
    verificar_duplicados(relations)