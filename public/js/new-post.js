const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const Content = document.querySelector('#content').value.trim();

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
