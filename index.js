// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
const yourOrder = []; //initilaizing empty array to populate with order items
// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu")
    // Loop through each category and its items in the menu object
    Object.keys(menu).forEach(function(key){
        // Create an element to represent the category
        const category = document.createElement("h2");
        // Set the text content of the category element to the category name
        category.textContent = key;
        // Append the category element to the menu container
        menuContainer.appendChild(category);

        // Create an element to represent a list of items
        const menuItems = document.createElement("ul");
        // Append a list of items element to the menu container
        menuContainer.appendChild(menuItems);

        // Loop through the items in the category and create list items
        menu[key].forEach(foodItem => {
            // Create a list item element
            const menuItem = document.createElement("li");
            // Set the text content of the list item element to the item name
            menuItem.textContent = foodItem;
            // Attach a click event listener to the list item to add it to the order
            menuItem.addEventListener('click', () => {
                yourOrder.push(foodItem);
                addToOrder(foodItem)
            })
            // Append the list item to the list of items
            menuItems.appendChild(menuItem);
            })
        }) 
     
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
    // Create a list item for the order
    const listItem = document.createElement("li");
    // Set the text content of the list item to the item name
    listItem.textContent = itemName;
    // Append the list item to the order items list
    orderItems.appendChild(listItem);
    // Calculate and update the total price
    const totalPrice = yourOrder.length * 60;
    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice;
}


// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);
