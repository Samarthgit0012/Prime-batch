// Create the document structure
let doc = document.implementation.createHTMLDocument("Dynamic Page");

// Get the <html> element
let html = doc.documentElement;

// Create <head> and <body>
let head = doc.createElement("head");
let body = doc.createElement("body");

// Create <title> inside <head>
let title = doc.createElement("title");
title.textContent = "Dynamic Page";
head.appendChild(title);

// Create <h1> inside <body>
let h1 = doc.createElement("h1");
h1.textContent = "Hello, World!";
body.appendChild(h1);

// Create <div> inside <body>
let div = doc.createElement("div");
div.setAttribute("id", "container"); // Giving it an ID for reference

// Apply blue border to the div using inline CSS
div.style.border = "2px solid blue";
div.style.padding = "10px";
div.style.width = "300px";

// Create 4 <h2> and 4 <p> inside <div>
for (let i = 1; i <= 4; i++) {
    let heading = doc.createElement("h2");
    heading.textContent = `Heading ${i}`;
    
    let paragraph = doc.createElement("p");
    paragraph.textContent = `This is paragraph ${i}.`;

    div.appendChild(heading);
    div.appendChild(paragraph);
}

// Append <div> to <body>
body.appendChild(div);

// Create <script> inside <body> and add JavaScript dynamically
let script = doc.createElement("script");
script.textContent = `
    console.log('Script Executed!');
    
    // Select the first <h2> inside #container using querySelector
    let firstHeading = document.querySelector("#container h2");
    console.log("First <h2> Element:", firstHeading.innerText);

    // Select all <p> elements inside #container using querySelectorAll
    let allParagraphs = document.querySelectorAll("#container p");
    allParagraphs.forEach((p, index) => console.log(\`Paragraph \${index + 1}: \`, p.innerText));

    // Modify innerText of the second <p> element
    if (allParagraphs.length > 1) {
        allParagraphs[1].innerText = "Updated Text!";
    }
`;
body.appendChild(script);

// Append <head> and <body> to <html>
html.appendChild(head);
html.appendChild(body);

// Replace the current document with the newly created one
document.replaceChild(html, document.documentElement);
