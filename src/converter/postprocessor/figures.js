module.exports = function (document) {
  Array.from(document.querySelectorAll("figure")).forEach((figure) => {
    // If caption is at start, put it at end
    if (
      figure.children.length > 0 &&
      figure.children[0].tagName == "FIGCAPTION"
    ) {
      figure.appendChild(figure.children[0]);
    }
    // Do not reduce subfigure.
    if (figure.children[0].tagName != "TABLE"){
      // Resize images to bump up resolution.
      // We assume that latexML will always have width
      Array.from(figure.getElementsByTagName("img")).forEach((img) => {
        width = img.getAttribute("width");
        height = img.getAttribute("height");
        img.setAttribute("width", Math.floor(parseInt(width) / 4.0));
        img.setAttribute("height", Math.floor(parseInt(height) / 4.0));
      });
    }
    else{
      // no margin for subfigure
      Array.from(figure.getElementsByTagName("figure")).forEach((fig) => {
        fig.style.margin = "0px";
      });
    }
  });
};
