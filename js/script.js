//declaração de variáveis e captura/conversão das planilhas
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


