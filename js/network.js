const network = document.getElementById("networkDiagram");

// Define nodes
const pages = [
    {name: "Home", link: "index.html", x: 50, y: 50},
    {name: "About", link: "about.html", x: 250, y: 100},
    {name: "Courses", link: "courses.html", x: 450, y: 50},
    {name: "Math", link: "math.html", x: 450, y: 200},
    {name: "Science", link: "science.html", x: 550, y: 150},
    {name: "Languages", link: "languages.html", x: 350, y: 250},
    {name: "Blog", link: "blog.html", x: 150, y: 250},
    {name: "Contact", link: "contact.html", x: 250, y: 350}
];

// Draw nodes
pages.forEach(p => {
    const node = document.createElement("div");
    node.className = "node";
    node.style.left = p.x + "px";
    node.style.top = p.y + "px";
    node.textContent = p.name;
    node.onclick = () => window.location.href = p.link;
    network.appendChild(node);
});

// Draw lines (connections)
function drawLine(x1, y1, x2, y2) {
    const line = document.createElement("div");
    line.className = "line";
    const length = Math.hypot(x2 - x1, y2 - y1);
    line.style.width = length + "px";
    line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    network.appendChild(line);
}

// Example connections (web-like)
drawLine(50,50,250,100); // Home → About
drawLine(50,50,450,50);  // Home → Courses
drawLine(250,100,150,250);// About → Blog
drawLine(450,50,450,200); // Courses → Math
drawLine(450,50,550,150); // Courses → Science
drawLine(450,50,350,250); // Courses → Languages
drawLine(350,250,250,350); // Languages → Contact
drawLine(150,250,250,350); // Blog → Contact
