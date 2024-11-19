import React from 'react';
import Link from 'next/link';

const LoginButton = () => {
    return (
        <Link href="/login" className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-500">
            
                Login
            
        </Link>
    );
};

export default LoginButton;