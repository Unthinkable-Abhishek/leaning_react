const heading = React.createElement(
    "div",    //type    // tag name 
    {id: "heading", xyz: "abc"},      // takes attributes 
    [
        React.createElement("p",{},"Hello"),
        React.createElement("p",{},"Bro"),
    ] 
);

console.log(heading) //An object , an react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// createElement makes an js obj

// costliest operation - when dom nodes need to be manipulated
// heading has 2 things - type , props
        // props has 2 things id-heading(attributes), children

// render is converting that react element to h1 tag and putting it into root tag
//      convert the js obj into html which browser undestands       
