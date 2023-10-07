import Link from "next/link"

export default function Home() {
  return (
    <header className="flex justify-between">
  <nav>
      <ul className="flex">
        
      <Link href={'#'}> Logo </Link>
        <li className="bold ml-4 mr-4">imagem</li>
        <li className="bold mr-4">teste</li>
        <li className="bold mr-4">teste</li>
        <li className="bold mr-4">teste</li>
        <li className="bold">teste</li>
      </ul>
   </nav>
   <ul>
    <button className="mr-4">Eae</button>
    <button className="mr-4">Eae</button>
   </ul>
   </header>
  )
}
