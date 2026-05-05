// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar todos los botones de agregar al menú
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    let contadorCarrito = 0;

    // Agregar evento click a cada botón de los productos
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function() {
            // Incrementar el contador
            contadorCarrito++;
            
            // Obtener el nombre del producto de la tarjeta actual
            const nombreProducto = this.parentElement.querySelector('h3').innerText;
            
            // Mostrar una alerta de confirmación
            alert(`¡Excelente elección! Has agregado "${nombreProducto}" a tu pedido.\nTotal de artículos: ${contadorCarrito}`);
            
            // Efecto visual rápido en el botón
            const textoOriginal = this.innerText;
            this.innerText = '¡Agregado! ✔️';
            this.style.backgroundColor = 'green';
            this.style.color = 'white';
            this.style.borderColor = 'green';

            // Restaurar el botón después de 2 segundos
            setTimeout(() => {
                this.innerText = textoOriginal;
                this.style.backgroundColor = '';
                this.style.color = '';
                this.style.borderColor = '';
            }, 2000);
        });
    });

    // Evento para el botón principal del banner (Hero)
    const botonHero = document.querySelector('.btn-pedir-hero');
    if(botonHero) {
        botonHero.addEventListener('click', () => {
            // Hacer scroll suave hasta la sección del menú
            document.querySelector('#menu').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});