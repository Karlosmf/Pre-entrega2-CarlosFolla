// Constructor para crear los objetos de sitios web
class Proyecto {
    constructor(titulo, descripcion, url, tecnologias) {
        // Validaciones para asegurarse de que los parámetros sean válidos
        if (typeof titulo !== "string" || titulo.trim() === "") {
            throw new Error("El título es obligatorio y debe contener caractres.");
        }
        if (typeof descripcion !== "string") {
            throw new Error("La descripción debe ser un texto.");
        }
        if (typeof url !== "string" || !/^https?:\/\/.+$/.test(url)) {
            throw new Error("La URL debe ser un texto válido que comience con 'http' o 'https'.");
        }
        if (!Array.isArray(tecnologias) || tecnologias.some(tech => typeof tech !== "string" || tech.trim() === "")) {
            throw new Error("Las tecnologías deben ser un texto separado por comas.");
        }
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.tecnologias = tecnologias;
    }

}

// Lista (array) de sitios web
const portfolio = [
    new Proyectos("Portfolio Personal", "Lo estoy haciendo", "https://miportafolio.com", ["HTML", "CSS", "JavaScript"]),
    new Proyectos("E-commerce", "", "https://tiendavirtual.com", ["React", "Node.js", "MongoDB"]),
    new Proyectos("Blog de Tecnología", "", "https://blogtecnologia.com", ["WordPress", "PHP"]),
    new Proyectos("Landing Page", "", "https://landingpage.com", ["HTML", "CSS"]),
    new Proyectos("Sistema de Gestión", "", "https://gestionapp.com", ["Angular", "Firebase"]),
];

// Mostrar todos los sitios web
console.log("Todos los proyectos:");
portfolio.forEach(site => {
    console.log(`- ${site.title}: ${site.url} (Tecnologías: ${site.technologies.join(", ")})`);
});

// Filtrar sitios que usan "CSS"
const filterByTechnology = (tech) => {
    return portfolio.filter(site => site.technologies.includes(tech));
};

const cssProjects = filterByTechnology("CSS");
console.log("\nProyectos que usan CSS:");
cssProjects.forEach(site => console.log(`- ${site.title}`));

// Buscar un proyecto por título
const findProjectByTitle = (title) => {
    return portfolio.find(site => site.title.toLowerCase() === title.toLowerCase());
};

const foundProject = findProjectByTitle("E-commerce");
console.log("\nProyecto encontrado:");
console.log(foundProject ? `${foundProject.title}: ${foundProject.url}` : "No encontrado");

// Crear una lista solo con los títulos usando map
const projectTitles = portfolio.map(site => site.title);
console.log("\nTítulos de todos los proyectos:", projectTitles);
