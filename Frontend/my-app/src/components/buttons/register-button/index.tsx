import React from 'react';
import Link from 'next/link';

const RegisterButton = () => {
    return (
        <Link href="/register" className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-500">
    
                Register
            
        </Link>
    );
};

export default RegisterButton;