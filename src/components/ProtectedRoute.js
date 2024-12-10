// 'use client';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/navigation';

// export default function ProtectedRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   const router = useRouter();

//   if (!isAuthenticated) {
//     if (typeof window !== 'undefined') {
//     //   router.push('/login'); // Redirige al login si no está autenticado
//     }
//     return null; // Mientras redirige, no muestra nada
//   }

//   return children; // Muestra el contenido si está autenticado
// }

'use client';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirigir al login si no está autenticado
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Mostrar el contenido solo si está autenticado
  return isAuthenticated ? children : null;
}
