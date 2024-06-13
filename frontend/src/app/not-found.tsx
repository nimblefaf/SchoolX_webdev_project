import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h3>К сожалению, запрашиваемая вами страница не найдена.</h3>
      <p>Неправильно набран адрес или такой страницы на сайте больше не существует.</p>
      <Link href="/">
        <button>
        Перейти на главную
        </button>
      </Link>
    </div>
  )
}