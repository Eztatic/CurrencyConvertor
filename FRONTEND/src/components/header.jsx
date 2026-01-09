import { useState } from 'react'

function Header() {
      const [count, setCount] = useState(0);

      return (
            <>
                  <header className='w-full mx-auto bg-blue-100 p-4'>
                        <p className='text-2xl font-semibold tracking-widest'>MONCOV</p>
                  </header>
            </>
      )
}

export default Header