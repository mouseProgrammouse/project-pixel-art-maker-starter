// Select color input
const colorPicker = $('#colorPicker');
// Select size input
const heightInput = $('#input_height');
const widthInput = $('#input_width');
//select size picker
const sizePicker = $('#sizePicker');
//selected color
let color = colorPicker.val();

// Add event listener to color picker
colorPicker.on('change', function() {
  color = colorPicker.val();
});

// When size is submitted by the user, call makeGrid()
sizePicker.on('submit', function(event) {
  event.preventDefault();
  //get new height and width
  const height = heightInput.val();
  const width = widthInput.val();
  makeGrid(height, width);
});

/**
 * @description Create a canvas
 * @param {number} height - height of canvas
 * @param {number} width - width of canvas
 */
function makeGrid(height, width) {
  const canvas = $('#pixel_canvas');
  //clear canvas
  canvas.children().remove();
  //fill canvas
  for (let row = 1; row <= height; row++) {
    let newRow = $('<tr></tr>');
    for (let col = 1; col <= width; col++) {
      newRow.append('<td></td>');
    }
    canvas.append(newRow);
  }
  //add event listeners to every "pixel" on canvas
  //click a cell to fill that cell with the chosen color
  canvas.on('click', 'td', function() {
    $(this).css('background-color', color);
  });
  //double-click a cell to clear that cells
  canvas.on('dblclick', 'td', function() {
    $(this).css('background-color', '#ffffff');
  });
}
