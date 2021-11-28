interface OgImage {
  url: string
}

interface Author {
  name: string
  picture: string
}

export interface Post {
  title?: string
  excerpt?: string
  coverImage?: string
  date?: string
  author?: Author
  ogImage?: OgImage
}
