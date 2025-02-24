export type collaboratorsType = {
  id: string
  name: string
  job: string
  admission_date: Date
  phone: string
  image: string
}

export async function getCollaborators(): Promise<collaboratorsType[]> {
  const response = await fetch('http://192.168.4.7:3000/employees', { method: 'GET' })
  return await response.json()
}