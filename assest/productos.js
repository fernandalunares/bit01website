window.addEventListener('DOMContentLoaded', () => {
    const productoDetails = {
      sofa: {
        title: 'Sofá',
        description: 'Este sofá moderno y elegante es el complemento perfecto para cualquier sala de estar.',
        image: './assest/sofa.jpg'
      },
      mesa: {
        title: 'Mesa',
        description: 'Una elegante mesa de comedor con un diseño moderno, es perfecta para reuniones.',
        image: './assest/mesa.jpg'
      },
      escritorio: {
        title: 'Escritorio',
        description: 'Escritorio funcional es ideal para crear un espacio de trabajo productivo y con estilo.',
        image: './assest/escritorio.jpg'
      },
      biblioteca: {
        title: 'Biblioteca',
        description: 'Es perfecta para organizar y exhibir tu colección de libros y objetos decorativos.',
        image: './assest/biblioteca.jpg'
      }
    };
  
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('producto');
  
    if (producto && productoDetails[producto]) {
      const productoDetail = productoDetails[producto];
  
      document.getElementById('producto-title').textContent = productoDetail.title;
      document.getElementById('producto-image').src = productoDetail.image;
      document.getElementById('producto-description').textContent = productoDetail.description;
    } else {
      const errorElement = document.createElement('p');
      errorElement.textContent = 'El producto solicitado no está disponible.';
      document.body.appendChild(errorElement);
    }
  });
  