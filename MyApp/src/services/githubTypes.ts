export declare module SearchUsersGithubApi {
  interface SearchUsersGithubResponse {
    incomplete_results: boolean
    items: Array<{
      avatar_url: string
      login: string
      url: string
      id: number
    }>
  }
  interface SearchUsersGithubResponseData {
    avatar_url: string
    login: string
    url: string
    id: number
  }

  interface SearchUsersGithubParams {
    q: string
    sort: string
    order: string
    per_page: number
    page: number
  }
}
