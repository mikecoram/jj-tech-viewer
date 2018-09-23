
async function getTechniques() {
    const tsvResponse = await fetch("https://mikecoram.github.io/jj-tech-viewer/techs.tsv");
    const tsvString = await readfile(await tsvResponse.blob())
    return parseTsvString(getTsvStringWithoutHeader(tsvString));
}

function getTags(techniques) {
    let tags = [];

    for (let tech of techniques) {
        let cleanTagString = tech.tags.replace(" ", "");

        for (let tag of cleanTagString.split(",")) {
            if (!tags.find(t => t == tag))
                tags.push(tag);
        }
    }

    return tags;
}

function getField(techniques, field) {
    let collection = [];

    for (let tech of techniques) {
        if (!collection.find(o => o == tech[field])) {
            collection.push(tech[field]);
        }
    }

    return collection;
}

const ColumnHeaderMappings = [
    "videoType",
    "startingPosition",
    "techniqueType",
    "techniqueName",
    "videoUrl",
    "tags",
    "fighterA",
    "fighterB",
    "gifLink",
];

function parseTsvString(tsvString) {
    let data = [];
    let currentId = 0;

    for (let row of tsvString.split("\n")) {
        let columns = row.split("\t");

        let parsedCol = {};

        for (let i = 0; i < ColumnHeaderMappings.length; i++) {
            parsedCol[ColumnHeaderMappings[i]] = columns[i];
        }

        parsedCol.id = currentId++;

        data.push(parsedCol);
    }

    return data;
}

function getTsvStringWithoutHeader(tsvString) {
    const firstNewLine = tsvString.indexOf("\n");
    return tsvString.substring(firstNewLine + 1);
}

function readfile(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = e => {
            resolve(reader.result);
        }

        reader.onerror = e => {
            reject();
        }

        reader.readAsText(blob);
    });
}