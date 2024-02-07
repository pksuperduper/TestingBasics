/**
 * 
 */

function goMadLib(formData) { 

    let noun = formData.elements.namedItem("noun").value;
    let activity = formData.elements.namedItem("activity").value;
    let different = formData.elements.namedItem("different").value;
    let final = formData.elements.namedItem("final").value;
    
    let newContent = "I found myself in a " + noun + ".";

    newContent += "I wanted to know what I should do and I did this -- " + activity + ".";

    newContent += "Then, I decided to do something different and " + different + ".";
    
    newContent += "Finally, I did this --" + final + ".";
    
    document.getElementById("content").innerHTML = newContent;
    
}
	
