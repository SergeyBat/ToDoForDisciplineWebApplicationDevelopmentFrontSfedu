'use client'

import { useRouter } from 'next/navigation'
 
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="container">
      <h1>Ошибка 404</h1>
      <p>Страница не найдена</p>
      <p>
        <span
          className="go-back"
          onClick={() => router.back()}
        >Вернуться</span>
        {' '}
        на предыдущую страницу
      </p>
    </div>
  )
}
