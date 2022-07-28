import React, { useMemo, useState } from 'react';


export const useFetching = (callback) => {
  const [isLoading, setIsPostsLoading] = useState(false)
  const [error, setError] = useState('')


  const fetching = async () => {
    try {
      setIsPostsLoading(true)
      await callback()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsPostsLoading(false)
    }
  }
  return [fetching, isLoading, error]
}