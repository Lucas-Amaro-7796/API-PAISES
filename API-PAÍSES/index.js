function preencherDados(info){

    document.getElementById('nomePais').value = info[0].name.official;
    document.getElementById('capitalDoPais').value = info[0].capital;
    document.getElementById('idiomaDoPais').value = Object.values(info[0].languages).toString().split(",").join(", ");
    document.getElementById('populacaoDoPais').value = info[0].population;
    document.getElementById('contineteDoPais').value = info[0].continents;

    const imagem = document.getElementById("bandeira")
    imagem.innerHTML = `<img src="${info[0].flags.png}">`


}

const pais = async() => {
    
    const pais = document.querySelector(".pais").value

   // api em funcionamento pelo FETCH, que tem essa função de fazer a requisição

    const url = `https://restcountries.com/v3.1/name/${pais}/`
    
   // await tem a função de esperar os dados antes de executar os scripts !!
    
    const dados = await fetch(url);
    const info = await dados.json();

    preencherDados(info);

}
