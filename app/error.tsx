'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="container">
      <h1>Ошибка 500</h1>
      <p>Ошибка сервера</p>
      <p>
        <button onClick={() => reset()}>
          Обновить страницу
        </button>
      </p>
    </div>
  )
}