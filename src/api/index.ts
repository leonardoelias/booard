import axios from 'axios'

const options =
  process.env.NODE_ENV === 'development'
    ? {
        headers: {
          Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`
        }
      }
    : {}


interface File {
  filename: string
  type: string
  language: string
  raw_url: string
  size: number
  trucade: boolean
  content: string
}

interface Files {
  [nameFile: string]: File
}

export interface Gist {
  id: string
  url: string
  created_at: string
  updated_at: string
  comments: number
  public: boolean
  description: string
  files: Files
}

export async function getGits() {
  const url = `https://api.github.com/gists`

  const { data } = await axios.get<Gist[]>(url, options)

  return data
}

export async function getGist(gistId: string) {
  const url = `https://api.github.com/gists/${gistId}`

  const { data } = await axios.get<Gist>(url, options)

  return data
}
