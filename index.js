let techniques;
let currentTechniques;
let tags;
let types;
let contexts;
let fighterAs;
let fighterBs;

(async () => {

    techniques = await getTechniques();

    tags = getTags(techniques);
    types = getField(techniques, "techniqueType");
    startingPositions = getField(techniques, "startingPosition");
    contexts = getField(techniques, "videoType");
    fighterAs = getField(techniques, "fighterA");
    fighterBs = getField(techniques, "fighterB");

    document.getElementById("filter-form").innerHTML += makeSelect(contexts, "Context (all)", "context");
    document.getElementById("filter-form").innerHTML += makeSelect(startingPositions, "Starting Position (all)", "startingPosition");
    document.getElementById("filter-form").innerHTML += makeSelect(types, "Type (all)", "type");

    populateTechniquesTable(techniques);

    document.getElementById("gif-view-overlay").onclick = () => {
        document.getElementById("gif-view-overlay").style = "display:none;";
    };

    document.onkeyup = (e) => {
        if (e.key == "Escape") {
            document.getElementById("gif-view-overlay").style = "display:none;";
        }
    }

})();

function populateTechniquesTable(techniques) {
    document.getElementById("tech-list").innerHTML = "";

    for (let tech of techniques) {
        let rowHtml = "";

        for (let col of IncludeColumns) {
            rowHtml += `<td>${tech[col]}</td>`;
        }

        let newRow = 
            `<tr id="tech-${tech.id}" class="tech-row">
                ${rowHtml}
                <td><button onclick="viewGif(${tech.id})">View</button></td>
            </tr>`;

        document.getElementById("tech-list").innerHTML += newRow;
    }

}

function makeSelect(options, defaultOption, fieldName) {
    let optionsHtml = "";

    optionsHtml += `<option value="none-selected">${defaultOption}</option>`;

    for (let o of options) {
        optionsHtml += `<option value="${o}">${o}</option>`;
    }

    return `<select id="select-${fieldName}" onchange="refreshTable()">
                ${optionsHtml}
            </select>`;
}

function refreshTable() {

    applyFilters();

    populateTechniquesTable(currentTechniques);

}

function applyFilters() {
    const context = document.getElementById("select-context").selectedOptions[0].value;
    const startingPosition = document.getElementById("select-startingPosition").selectedOptions[0].value;
    const type = document.getElementById("select-type").selectedOptions[0].value;

    currentTechniques = techniques;

    if (context != "none-selected") {
        currentTechniques = currentTechniques.filter(t => t.videoType == context);
    }

    if (startingPosition != "none-selected") {
        currentTechniques = currentTechniques.filter(t => t.startingPosition == startingPosition);
    }

    if (type != "none-selected") {
        currentTechniques = currentTechniques.filter(t => t.techniqueType == type);
    }

    return currentTechniques;
}

function viewGif(id) {
    const tech = techniques.find(t => t.id === id);

    const videoUrl = tech.gifLink.replace(".gif", ".mp4");

    document.getElementById("gif-view-overlay").style = "display:block";

    document.getElementById("gif-view-overlay").innerHTML = 
       `<video id="gif-view" class="gif-view" width="960" height="540" controls autoplay loop>
            <source type="video/mp4" src="${videoUrl}">
        </video>`;
}

function search() {
    let term = document.getElementById("search-term").value;

    currentTechniques = applyFilters().filter(t => t.techniqueName.toLowerCase().includes(term.toLowerCase())
        || t.tags.toLowerCase().includes(term.toLowerCase()));

    populateTechniquesTable(currentTechniques);
}

const IncludeColumns = [
    "videoType",
    "startingPosition",
    "techniqueType",
    "techniqueName",
    "tags",
    "fighterA",
    "fighterB"
]