export declare module SearchUsersGithubApi {
  interface SearchUsersGithubResponse {
    incomplete_results: boolean
    items: Array<{
      avatar_url: string
      login: string
      url: string
      id: string
    }>
  }

  interface SearchUsersGithubParams {
    q: string
    sort: string
    order: string
    per_page: number
    page: number
  }
}
