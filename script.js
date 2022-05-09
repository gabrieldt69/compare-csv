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
    let contadorPossiveisComparacoes = 0;

    file1.data.map((elementoA) => {
        console.log(`${elementoA[3]?.toLowerCase()}`);

        file2.data.map((elementoB) => {
            if (elementoA[3]?.toLowerCase()?.toLowerCase() == elementoB[3]?.toLowerCase()) {
                console.log(`${elementoA[3]?.toLowerCase()} == ${elementoB[3]?.toLowerCase()}`);
                contador++;
            }

            try {
                if (
                    `${elementoA[3]?.toLowerCase().split(' ')[0]} ${elementoA[3]?.toLowerCase().split(' ')[1]}` ==
                    `${elementoB[3]?.toLowerCase().split(' ')[0]} ${elementoB[3]?.toLowerCase().split(' ')[1]}`
                ) {
                    contadorPossiveisComparacoes++;
                }
            } catch (e) {}

            contadorVerificações++;
        });
    });

    alert(
        `Existem ${contador} nomes do arquivo A no arquivo B\nTotal de Verificações: ${contadorVerificações}\nNOTA: Nomes iniciais similares: ${contadorPossiveisComparacoes}`
    );
});
