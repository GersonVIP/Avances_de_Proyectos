  // Función para mostrar una agenda-calendario en una nueva ventana
  function mostrarAgenda() {
    const ventana = window.open("", "_blank", "width=600,height=400");
    ventana.document.write(`<h1>Agenda-Calendario</h1>`);
    ventana.document.write(`
      <iframe 
        src="https://calendar.google.com/calendar/embed" 
        style="border: 0" 
        width="100%" 
        height="90%" 
        frameborder="0" 
        scrolling="no">
      </iframe>
    `);
    ventana.document.close();
  }

  // Función para mostrar la fecha y hora actual en una nueva ventana
    function mostrarFechaHora() {
    const ventana = window.open("", "_blank", "width=300,height=200");
    const fechaHora = new Date();
    ventana.document.write(`<h1>Fecha y hora actual</h1>`);
    ventana.document.write(`<p>${fechaHora}</p>`);
    ventana.document.close();
  }