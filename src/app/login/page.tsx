'use client'

import { Form } from '../../components/Form'
import { useAuthFetch } from '../../hooks/useAuthFetch'
import { useLoading } from '../../hooks/useLoading'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext';
import router from 'next/router';

export default function LoginPage () {
  const { t, i18n } = useTranslation();
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch();
  const { login } = useAuth();
  // const router = useRouter();

  const handleLogin = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'login',
      redirectRoute: '/logeado',
      formData
    })
    finishLoading()
  }
  //   await authFetch({
  //     endpoint: 'login',
  //     formData
  //   });
  //   finishLoading();
  //   const token = 'fictitious-token'; // Almacenar un token ficticio
  //   login(token); // Guardar el token en el contexto de autenticación
  //   router.push('/protegida');
  // }

return (
  <div className="flex flex-col items-center justify-top min-h-screen !text-black p-0">
    <Form
      title={t("inicioSesion")}
      onSubmit={login}
      description={t("formularioIniciarSesion")}
      className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col gap-4 !text-black"
    >
      <Form.Input
        label={t("correo")}
        name="email"
        placeholder={t("ingresaCorreo")}
        className="bg-gray-100 text-black placeholder-gray-500"
      />
      <Form.Input
        label="Contraseña"
        name="password"
        type="password"
        placeholder={t("ingresaContrasena")}
        className="bg-gray-100 text-black placeholder-gray-500"
      />
      <Form.SubmitButton buttonText={t("inicioSesion")} isLoading={isLoading} />
      <Form.Footer
        description={t("olvidarContrasena")}
        link="/forget-password"
        textLink={t("recuperarContrasena")}
      />
      <Form.Footer
        description={t("noCuenta")}
        link="/register"
        textLink={t("registrar")}
      />
    </Form>
  </div>
)


}