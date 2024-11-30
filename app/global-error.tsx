'use client'

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line 
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <h1>Ошибка сервера</h1>
        <p>
          <button onClick={() => reset()}>
            Обновить страницу
          </button>
        </p>
      </body>
    </html>
  )
}