const deleteFormHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(id);
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: id,
      }),
      Headers: {
        'Content-Type': 'aplication/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
        
      }
  }
    document
      .querySelector('#delete')
      .addEventListener('click', deleteFormHandler);
  