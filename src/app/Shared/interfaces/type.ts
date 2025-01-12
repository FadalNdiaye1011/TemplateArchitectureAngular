export interface Type {
  id: number
  libelle: string
  created_at: any
  updated_at: any
  biens: Bien[]
}


export interface Bien {
  id: number
  adresse: string
  prix: string
  description: string
  superficie: number
  nombreChambre?: number
  nombredeSalon?: number
  presenceCour?: number
  isSaledeBain?: number
  isBalcon: any
  isSalon: any
  type_id: number
  created_at: string
  updated_at: string
}
