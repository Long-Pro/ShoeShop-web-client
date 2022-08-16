export const getAllComment = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const jsonData = await response.json()
  return jsonData
}
