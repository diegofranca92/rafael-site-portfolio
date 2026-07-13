import Image from 'next/image'
export function LinkedinCard() {
  return (
    <div className='border-gray-900 border-2 bg-primary fixed bottom-0 right-0 m-4 p-4 rounded-lg shadow-2xl flex items-center gap-4 max-w-[400px]'>
      <Image src='/assets/foto1.jpg' alt='Seguir no Linkedin' width={150} height={200} className='rounded-2xl' />
      <div>
        <h2 className='text-2xl font-bold'>Rafael Silva</h2>
        <p className='text-lg'>Professor e Palestrante</p>
        <a href="#linkedin" className='text-blue-500 hover:underline'>
          Seguir no LinkedIn
        </a>
      </div>
    </div>
  )
}
