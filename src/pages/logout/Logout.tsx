import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout: React.FC = () => {
    const [error, setError] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                const data = { 'status': 'sucess', 'message': 'logout' };
                if (data.status === 'success') {
                    localStorage.removeItem('token');
                    // Redirect to login page after successful logout
                    router.push('/login');
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('An error occurred');
            }
        };

        handleLogout();
    }, [router]);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default Logout;
