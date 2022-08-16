export async function getComment() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Convert dữ liệu ra json
  const jsonData = await response.json()
  return jsonData
}
