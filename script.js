// Função para classificar o nível do herói com base na XP
function obterNivelHeroi(xp) {
    if (xp < 1000) return { nivel: "Ferro", classe: "ferro" };
    if (xp <= 2000) return { nivel: "Bronze", classe: "bronze" };
    if (xp <= 5000) return { nivel: "Prata", classe: "prata" };
    if (xp <= 7000) return { nivel: "Ouro", classe: "ouro" };
    if (xp <= 8000) return { nivel: "Platina", classe: "platina" };
    if (xp <= 9000) return { nivel: "Ascendente", classe: "ascendente" };
    if (xp <= 10000) return { nivel: "Imortal", classe: "imortal" };
    return { nivel: "Radiante", classe: "radiante" };
}

// Função que captura os dados do formulário e exibe o resultado
function classificarHeroi() {
    let nome = document.getElementById("nomeHeroi").value.trim();
    let xp = parseInt(document.getElementById("xpHeroi").value);

    // Validação básica
    if (!nome) {
        alert("Por favor, insira o nome do herói.");
        return;
    }
    if (isNaN(xp) || xp < 0) {
        alert("Por favor, insira um valor válido para XP.");
        return;
    }

    // Obtém nível e classe CSS correspondente
    let { nivel, classe } = obterNivelHeroi(xp);

    // Exibe o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`;
    resultado.className = `resultado ${classe}`;
}
