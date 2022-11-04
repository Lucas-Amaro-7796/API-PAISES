function preencherDados(info){

    document.getElementById('resultadoNome').value = info[0].name.official;
    document.getElementById('resultadoCapital').value = info[0].capital;
    document.getElementById('resultadoIdioma').value = Object.values(info[0].languages).toString().split(",").join(", ");
    document.getElementById('resultadoPopulacao').value = info[0].population;
    document.getElementById('resultadoContinente').value = info[0].continents;

    const imagem = document.getElementById("bandeira")
    imagem.innerHTML = `<img src="${info[0].flags.png}">`



    
    //console.log(info[0].name.common)
    console.log(info)

}

const pais = async() => {
    
    const pais = document.querySelector(".pais").value

    //console.log(pais)

    const url = `https://restcountries.com/v3.1/name/${pais}/`
    
    const dados = await fetch(url);
    const info = await dados.json();

    preencherDados(info);

}