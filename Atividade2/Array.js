function verificarPlaneta() {
    const planetas = ["Terra", "Marte", "Urano", "Vênus", "Júpiter", "Saturno", "Mercúrio", "Netuno"];
    const planetInput = document.getElementById("planetInput").value;
    const resultado = document.getElementById("resultado");

    if (planetas.includes(planetInput)) {
        resultado.textContent = `${planetInput} está na lista de planetas.`;
    } else {
        resultado.textContent = `${planetInput} não está na lista de planetas.`;
    }
}
