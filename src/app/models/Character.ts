export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  origin: {
    name: string
  },
  image: string,
}
