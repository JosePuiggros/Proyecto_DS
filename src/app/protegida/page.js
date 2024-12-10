import ProtectedRoute from '../../components/ProtectedRoute';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Página Protegida</h1>
        <p>Solo puedes ver esto si estás autenticado.</p>
      </div>
    </ProtectedRoute>
  );
}