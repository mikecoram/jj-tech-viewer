let techniques;
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

})();

function makeSelect(options, field) {
    let optionsHtml = "";
    for (let o of options) {
        optionsHtml += `<option value="${o}">${o}</option>`;
    }

    return `<select>
                ${optionsHtml}
            </select>`;
}

function viewGif(id) {
    const tech = techniques.find(t => t.id === id);
    const row = document.getElementById(`tech-${id}`);
    document.getElementById("gif-view").innerHTML = `<img src="${tech.gifLink}" />`;
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