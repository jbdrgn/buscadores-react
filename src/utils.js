export default function capitalizeName(name){
    var word = `${name}`;
    return `${word[0].toLocaleUpperCase()+word.substring(1,word.length)}`
}

function capitalizeLine(line){
    /*
    //#1.0
    var words = line.split(" ");
    return words.map((word) => {
        return capitalizeName(word)
    }).join(" ")
    */

    //#2.0
    return line.replace(/\b[a-z]/gu, word => word.toLocaleUpperCase());    
}

function trimLine(line){
    return line.replace(" ","");
}

function asPath(line){
    return "/"+line;
}

function asParameter(line){
    return "/:"+line;
}

//"Ça été Mičić. ÀÉÏÓÛ" to "Ca ete Micic. AEIOU"
function removeDiacritics(line){
    return line.normalize('NFD').replace(/\p{Diacritic}/gu, "");    
    // return line.normalize('NFD').replace(/[\u0300-\u036f]/g, "");    
}

function cutTitle(title, maxLength, pattern){
    var shortTitle = (maxLength < title.length) ? title.split(pattern)[0] : title;
    return shortTitle.replace(/\b[a-z]/gu, word => word.toLocaleUpperCase());
}

export {capitalizeLine, trimLine, asParameter, asPath, removeDiacritics, cutTitle};