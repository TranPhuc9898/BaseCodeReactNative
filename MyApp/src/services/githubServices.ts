import githubAxiosInstance from './githubHttpClient'

import { SearchUsersGithubApi } from '../services/githubTypes'

// export function searchUsersGithub(
//   params: SearchUsersGithubApi.SearchUsersGithubParams
// ) {
//   const response =
//     githubAxiosInstance.get<SearchUsersGithubApi.SearchUsersGithubResponse>(
//       '/search/users',
//       {
//         params: {
//           accept: 'application/vnd.github.v3+json',
//           q: params.q,
//           sort: params.sort,
//           order: params.order,
//           per_page: params.per_page,
//           page: params.page
//         }
//       }
//     )

//   return response.then(res => {
//     return res.data
//   })
// }

export async function searchUsersGithubAsync(
  params: SearchUsersGithubApi.SearchUsersGithubParams
) {
  const response =
    await githubAxiosInstance.get<SearchUsersGithubApi.SearchUsersGithubResponse>(
      '/search/users',
      {
        params: {
          accept: 'application/vnd.github.v3+json',
          q: params.q,
          sort: params.sort,
          order: params.order,
          per_page: params.per_page,
          page: params.page
        }
      }
    )
  console.log(response.data, 'search')

  return response.data
}
