// Configuración global
const API_URL = 'panel/api/'; // Ruta hacia tu panel de administración

// Carga de contenido en página principal
document.addEventListener('DOMContentLoaded', function() {
    // Aquí se conecta con el panel para traer el contenido desde la base de datos
    console.log('Plataforma cargada correctamente');
    
    // Ejemplo: Conexión con datos IMDB
    async function obtenerDatosIMDB(titulo) {
        try {
            // La clave de API se gestiona desde el panel de administración
            const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(titulo)}&api_key=API_KEY_PANEL`);
            const datos = await respuesta.json();
            return datos.results[0];
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }
});

// Sistema de búsqueda
if(document.getElementById('buscador')) {
    document.getElementById('buscador').addEventListener('input', function() {
        const termino = this.value.toLowerCase();
        // Filtrar contenido en tiempo real
    });
}

// Gestión de formularios
if(document.getElementById('formLogin')) {
    document.getElementById('formLogin').addEventListener('submit', function(e) {
        e.preventDefault();
        // Enviar datos al panel de administración para validar
        alert('Procesando inicio de sesión...');
    });
}
