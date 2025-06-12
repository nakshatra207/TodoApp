// Wait for the entire window (including images, scripts, etc.) to load before running the code
window.addEventListener('load', () => {

	// Select the form element by its ID
	const form = document.querySelector("#new-task-form");

	// Select the input field where the user types the new task
	const input = document.querySelector("#new-task-input");

	// Select the container where all tasks will be listed
	const list_el = document.querySelector("#tasks");

	// Add an event listener to the form for when it is submitted
	form.addEventListener('submit', (e) => {
		// Prevent the form from submitting and refreshing the page
		e.preventDefault();

		// Get the value of the input (the new task text)
		const task = input.value;

		// Create a new div for the task
		const task_el = document.createElement('div');
		task_el.classList.add('task'); // Add a class to style the task

		// Create a div to contain the task content (text input)
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		// Append the content div to the main task div
		task_el.appendChild(task_content_el);

		// Create an input element for the task text
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text'); // Add class for styling
		task_input_el.type = 'text'; // Set input type
		task_input_el.value = task; // Set input value to task text
		task_input_el.setAttribute('readonly', 'readonly'); // Make input read-only initially

		// Append the task input to the content div
		task_content_el.appendChild(task_input_el);

		// Create a div to hold action buttons (Edit and Delete)
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		// Create the Edit button
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit'); // Add class for styling
		task_edit_el.innerText = 'Edit'; // Set initial text to "Edit"

		// Create the Delete button
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete'); // Add class for styling
		task_delete_el.innerText = 'Delete'; // Set text to "Delete"

		// Add both buttons to the actions div
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		// Append the actions div to the main task div
		task_el.appendChild(task_actions_el);

		// Add the complete task element to the task list
		list_el.appendChild(task_el);

		// Clear the input field after the task is added
		input.value = '';

		// Add event listener for the Edit button
		task_edit_el.addEventListener('click', (e) => {
			// If the button says "Edit", make the input editable
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save"; // Change button text to "Save"
				task_input_el.removeAttribute("readonly"); // Make input editable
				task_input_el.focus(); // Focus the input for user convenience
			} else {
				// If button says "Save", make the input read-only again
				task_edit_el.innerText = "Edit"; // Change text back to "Edit"
				task_input_el.setAttribute("readonly", "readonly"); // Make input read-only
			}
		});

		// Add event listener for the Delete button
		task_delete_el.addEventListener('click', (e) => {
			// Remove the task element from the list
			list_el.removeChild(task_el);
		});
	});
});
