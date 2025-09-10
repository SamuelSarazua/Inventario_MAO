function vista(){

    let seccionVista = document.createElement('section');
    seccionVista.className = "seccion-vista";
    
    let headerSele = document.createElement('header');
    headerSele.className = "header-sele";

    let titulo = document.createElement('h1');
    titulo.textContent = "Colegio Manos a la Obra";

    let logo = document.createElement('img');
    logo.src = "./img/logo.avif"

    headerSele.appendChild(titulo);
    headerSele.appendChild(logo)
    seccionVista.appendChild(headerSele);

    let divBotones = document.createElement('div')
    divBotones.className = "div-botones"

    let buttonAdmin = document.createElement('button');
    buttonAdmin.className = "admin"
    buttonAdmin.textContent = "Compras"
    divBotones.appendChild(buttonAdmin);

    let buttonAdmin2 = document.createElement('button');
    buttonAdmin2.className = "admin"
    buttonAdmin2.textContent = "Recursos Humanos"
    divBotones.appendChild(buttonAdmin2);

    let buttonAdmin3 = document.createElement('button');
    buttonAdmin3.className = "admin"
    buttonAdmin3.textContent = "Admisiones"
    divBotones.appendChild(buttonAdmin3);

    let buttonAdmin4 = document.createElement('button');
    buttonAdmin4.className = "admin"
    buttonAdmin4.textContent = "Recepcion"
    divBotones.appendChild(buttonAdmin4);

    let buttonAdmin5 = document.createElement('button');
    buttonAdmin5.className = "admin"
    buttonAdmin5.textContent = "Caja"
    divBotones.appendChild(buttonAdmin5);

    let buttonAdmin6 = document.createElement('button');
    buttonAdmin6.className = "admin"
    buttonAdmin6.textContent = "Contabilidad"
    divBotones.appendChild(buttonAdmin6);

    seccionVista.appendChild(divBotones)

    return seccionVista;
}

export { vista }