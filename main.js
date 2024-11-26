// Constructor para crear los objetos de sitios web
class Proyecto {
    constructor(titulo = "", descripcion = "", url = "", tecnologias = []) {
        
        this.title = titulo;
        this.descripcion = descripcion;
        this.url = url;
        this.tecnologias = tecnologias;
    }

}

// Lista (array) de sitios web 
const portfolio = [
    new Proyecto("Portfolio Personal", "Lo estoy haciendo", "https://miportafolio.com", ["HTML", "CSS", "JavaScript"]),
    new Proyecto("E-commerce", "", "https://tiendavirtual.com", ["React", "Node.js", "MongoDB"]),
    new Proyecto("Blog de Tecnología", "", "https://blogtecnologia.com", ["WordPress", "PHP"]),
    new Proyecto("Landing Page", "", "https://landingpage.com", ["HTML", "CSS"]),
    new Proyecto("Sistema de Gestión", "", "https://gestionapp.com", ["Angular", "Firebase"]),
];

// Mostrar todos los sitios web
console.log("Todos los proyectos:");
portfolio.forEach(site => {
    console.log(`- ${site.title}: ${site.url} (Tecnologias: ${site.tecnologias.join(", ")})`);
});

// Filtrar sitios que usan "CSS"
const filterByTechnology = (tech = "") => {
    return portfolio.filter(site => site.tecnologias.includes(tech));
};

const cssProjects = filterByTechnology("CSS");
console.log("\nProyectos que usan CSS:");
cssProjects.forEach(site => console.log(`- ${site.title}`));

// Buscar un proyecto por título
const findProjectByTitle = (title = "") => {
    debugger
    return portfolio.find(site => site.title.toLowerCase() === title.toLowerCase());
};

const foundProject = findProjectByTitle("E-commerce");
console.log("\nProyecto encontrado:");
console.log(foundProject ? `${foundProject.title}: ${foundProject.url}` : "No encontrado");

// Crear una lista solo con los títulos usando map
const projectTitles = portfolio.map(site => site.title);
console.log("\nTítulos de todos los proyectos:", projectTitles);
