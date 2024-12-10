import ProtectedRoute from '../../components/ProtectedRoute';

function page() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Página Protegida</h1>
        <p>Solo puedes ver esto si estás autenticado.</p>
        <img
          src="ReceFitsLogo.png"
          alt="ReceFits Logo"
          className="w-32 sm:w-40"
        />
      </div>
     </ProtectedRoute>
  );
}
export default page;