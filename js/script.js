var file1;
var file2;

document.getElementById('upload-csv1').addEventListener('change', () => {
    try {
        Papa.parse(document.getElementById('upload-csv1').files[0], {
            download: true,
            header: false,
            complete: (e) => {
                file1 = e;
            },
        });
    } catch (e) {
        alert('Não foi possivel ler o arquivo');
    }
});

document.getElementById('upload-csv2').addEventListener('change', () => {
    try {
        Papa.parse(document.getElementById('upload-csv2').files[0], {
            download: true,
            header: false,
            complete: (e) => {
                file2 = e;
            },
        });
    } catch (e) {
        alert('Não foi possivel ler o arquivo');
    }
});

document.getElementById('btn-compare-csv').addEventListener('click', () => {
    let contador = 0;
    let contadorVerificações = 0;

    file1.data.map((elementoA) => {
        console.log(elementoA[1]);

        file2.data.map((elementoB) => {
            if (elementoA[1] == elementoB[2]) {
                console.log(elementoA[1] == elementoB[2]);
                contador++;
            }
            contadorVerificações++;
        });
    });

    alert(
        `Existem ${contador} ocorrências do arquivo A no arquivo B\nTotal de Verificações: ${contadorVerificações}\n`
    );
});
