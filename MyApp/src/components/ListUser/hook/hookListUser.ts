import { SearchUsersGithubApi } from '@/services/githubTypes'
import { useEffect, useState } from 'react'
import { searchUsersGithubAsync } from '../../../services/githubServices'

function hookListUser() {
  const [users, setUsers] = useState<
    Array<{
      avatar_url: string
      login: string
      url: string
      id: string
    }>
  >([])

  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search) {
      const fetchAPI = async (search: string) => {
        try {
          const respUsers = await searchUsersGithubAsync({
            q: search,
            page: 1,
            per_page: 10,
            sort: 'followers',
            order: 'asc'
          })
          console.log(search, 'data')
          setUsers(respUsers.items)
        } catch (err) {
          setError((err as Error)?.message || 'Something went wrong')
        } finally {
          // code finally
          setLoading(false)
        }
      }

      fetchAPI(search)

      setLoading(true)
    }
  }, [search])
  return {
    setSearch,
    error,
    users,
    loading,
    setLoading
  }
}

export default hookListUser
