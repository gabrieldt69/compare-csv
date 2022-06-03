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

//verificação dos nomes não encontrados
document.getElementById('btn-compare-csv').addEventListener('click', () => {
    // cabeçalho dos arquivos csv
    let headFile1 = file1.data.shift()
    let headFile2 = file2.data.shift()

    // separando os nomes de cada linha em um só array
    const file2_ids = file2.data.map((item) => item[3]?.toLowerCase())

    // filtra os itens do arquivo 1 que não estão no arquivo 2
    const result = file1.data.filter((item) => {
      return file2_ids.indexOf(item[3]?.toLowerCase()) === -1
    })

    //filtra o resultado para mostrar apenas os nomes

    let resultado = result.map(r => r[3]?.toLowerCase());

    document.getElementById('result').innerHTML= 'Não encontrados: <br>' + resultado.join('<br>');

    if (result?.length)
      alert(`Existem ${result.length} nomes do arquivo A não encontrados no arquivo B\nTotal de Verificações: ${file1.data.length}\n`);
    else
      alert(`Todos os nomes do arquivo A estão no arquivo B\nTotal de Verificações: ${file2.data.length}\n`);
});