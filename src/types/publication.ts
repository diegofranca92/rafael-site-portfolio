export interface Publication {
  id: string
  title: string
  description: string
  category: string
  institution: string
  image: string
  alt: string
  link?: string
  order: number
  published: boolean
  createdAt?: string
  updatedAt?: string
}

export type PublicationInput = Omit<
  Publication,
  'id' | 'createdAt' | 'updatedAt'
>
