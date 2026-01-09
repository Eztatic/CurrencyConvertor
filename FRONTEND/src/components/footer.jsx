import { useState } from 'react'

function Footer() {
      const [count, setCount] = useState(0);

      return (
            <>
                  <header className='w-full mx-auto bg-blue-100 p-4'>
                        <p className='text-2xl font-semibold'>FOOTER</p>
                  </header>
            </>
      )
}

export default Footer