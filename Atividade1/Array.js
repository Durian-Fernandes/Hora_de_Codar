const Aluno = [];
const NomeInput = document.getElementById("NomeAluno");
const ListAluno = document.getElementById("ListAluno");
const Resultado = document.getElementById("Resultado");

function AddAluno() {
    const NomeAluno = NomeInput.value.trim();

    if (NomeAluno.toLowerCase() === "pare") {
        MostrarAlunos();
    } else if (NomeAluno !== "") {
        Aluno.push(NomeAluno);
        NomeInput.value = "";
        NomeInput.focus();
    }
}

function MostrarAlunos() {
    const TotalAlunos = Aluno.length;

    if (TotalAlunos > 0) {
        Resultado.innerHTML = `Total de estudantes cadastrados: ${TotalAlunos}<br><br>Lista de estudante:\n${Aluno.join(", ")}`;
    } else {
        Resultado.textContent = "Nenhum estudante cadastrado.";
    }
}


