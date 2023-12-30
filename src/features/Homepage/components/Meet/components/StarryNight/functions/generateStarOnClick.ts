{ /* TODO generate stars on click
 The steps is simple, add and event listner to the wrapper div, when that div is clicked, get the mouse position and create a star. Remember to only create a maximum number of stars, so the app doesn't get slower. IDK maybe 15 stars is good and then when creating the 16th remove the first one.

Reference https://www.kirupa.com/snippets/move_element_to_click_position.html

 <script>
// var theThing = document.querySelector("#thing");
var container = document.querySelector("#stars-wrapper");
console.log(container)
container.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
  var parentPosition = getPosition(e.currentTarget);
  var xPosition = e.clientX - parentPosition.x;
  var yPosition = e.clientY - parentPosition.y;

  // var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
  // var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);
  // theThing.style.left = xPosition + "px";
  // theThing.style.top = yPosition + "px";

  console.log({left: xPosition + "px", top: yPosition + "px"})
}

// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
</script> */ }
