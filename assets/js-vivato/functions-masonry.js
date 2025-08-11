
// See: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb

function pdGrid2ResizeGridItem(item){
  grid = document.getElementsByClassName("pd-grid-2-grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function pdGrid2ResizeAllGridItems(){
  allItems = document.getElementsByClassName("pd-grid-2-item");
  for(x=0;x<allItems.length;x++){
    pdGrid2ResizeGridItem(allItems[x]);
  }
}

function pdGrid2ResizeInstance(instance){
  item = instance.elements[0];
  pdGrid2ResizeGridItem(item);
}

window.onload = pdGrid2ResizeAllGridItems();
window.addEventListener("resize", pdGrid2ResizeAllGridItems);

allItems = document.getElementsByClassName("pd-grid-2-item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], pdGrid2ResizeInstance);
}