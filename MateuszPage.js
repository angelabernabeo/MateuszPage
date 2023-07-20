
// images to arrayOfImages

const image_array_left = ['2.jpg', '3.jpg', '5.jpg', '7.jpg'];

const image_array_right = ['8.jpg', '1.jpg', '4.jpg', '6.jpg'];
 
function random_image() {
    get_random_image_left()
    get_random_image_right()
}

function get_random_image_left() {
    const random_index_left = Math.floor(Math.random() * image_array_left.length);
    const selected_image_left = image_array_left[random_index_left];
    document.getElementById('image_shower_left').src = 'images/'+selected_image_left;
}

function get_random_image_right() {
    const random_index_right = Math.floor(Math.random() * image_array_right.length);
    const selected_image_right = image_array_right[random_index_right];
    document.getElementById('image_shower_right').src = 'images/'+selected_image_right;
}