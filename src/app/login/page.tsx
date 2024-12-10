'use client'

import { Form } from '../../components/Form'
import { useAuthFetch } from '../../hooks/useAuthFetch'
import { useLoading } from '../../hooks/useLoading'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function LoginPage () {
  const { t, i18n } = useTranslation();
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const login = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'login',
      redirectRoute: '/home',
      formData
    })
    finishLoading()
  }

//   return ( // este es el original
//     <>
//       <Form
//         title='Inicia Sesión'
//         onSubmit={login}
//         description='Formulario para iniciar sesión'
//       >
//         <div className='my-[10px] flex flex-col gap-4'>
//           <Form.Input
//             label='Correo'
//             name='email'
//             placeholder='Ingresa tu correo...'
//           />
//           <Form.Input
//             placeholder='Ingresa tu contraseña...'
//             label='Contraseña'
//             name='password'
//             type='password'
//           />
//         </div>
//         <Form.SubmitButton buttonText='Iniciar Sesión' isLoading={isLoading} />
//         <Form.Footer
//           description='Te olvidate tu contraseña?'
//           link='/forget-password'
//           textLink='Recuperar contraseña'
//         />
//         <Form.Footer
//           description='Aun no tienes cuenta?'
//           link='/register'
//           textLink='Registrate'
//         />
//       </Form>
//     </>
//   )
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