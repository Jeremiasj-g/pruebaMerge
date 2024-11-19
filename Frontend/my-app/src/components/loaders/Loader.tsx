import React from 'react'

const Loader = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className="relative w-16 h-16 rounded-full animate-spin before:absolute before:w-full before:h-full before:rounded-full before:bg-gradient-to-b before:from-gray-400 before:to-gray-900 after:absolute after:w-[85%] after:h-[85%] after:bg-white after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>
        </div>
    )
}

export default Loader