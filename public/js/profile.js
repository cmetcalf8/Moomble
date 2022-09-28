const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#restaurant-name').value.trim();
    const pricing = document.querySelector('#pricing-tier').value.trim();
    const description = document.querySelector('#dish-desc').value.trim();
  
    if (name && pricing && description) {
      const response = await fetch(`/api/restaurants`, {
        method: 'POST',
        body: JSON.stringify({ name, pricing, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create restaurant');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/restaurants/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete restaurant');
      }
    }
  };
  
  document
    .querySelector('.new-restaurant-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.restaurant-list')
    .addEventListener('click', delButtonHandler);