import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl font-semibold'>Hola José.🖐🏻</h1>
      <a href="/signin" className='btn btn-primary'>Inicia Sesión</a>
    </main>
  )
}
