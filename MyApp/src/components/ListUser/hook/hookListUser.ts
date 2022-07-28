import { updateProductByIds } from '@/redux/productSlice'
import { SearchUsersGithubApi } from '@/services/githubTypes'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchUsersGithubAsync } from '../../../services/githubServices'

function hookListUser() {
  const [users, setUsers] = useState<
    Array<{
      avatar_url: string
      login: string
      url: string
      id: number
    }>
  >([])

  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (search) {
      const fetchAPI = async (search: string) => {
        try {
          const respUsers = await searchUsersGithubAsync({
            q: search,
            page: 1,
            per_page: 3,
            sort: 'followers',
            order: 'asc'
          })
          console.log(search, 'data')
          let productItems: any = []
          for (const item of respUsers.items) {
            productItems = productItems.concat(item)
          }
          dispatch(updateProductByIds(productItems))
          console.log(productItems, 'productItems')
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
    setLoading,
    search
  }
}

export default hookListUser
