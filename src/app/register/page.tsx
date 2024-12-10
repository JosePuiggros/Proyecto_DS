'use client'

import { Form } from '../../components/Form'
import { useAuthFetch } from '../../hooks/useAuthFetch'
import { useLoading } from '../../hooks/useLoading'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function LoginPage () {
  const { t, i18n } = useTranslation();
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const register = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'register',
      redirectRoute: '/home',
      formData
    })
    finishLoading()
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen !text-black p-0 mt-0">

      <Form
        title={t("registrar")}
        onSubmit={register}
        description={t("formularioCrearCuenta")}
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label={t("correo")}
            name='email'
            placeholder={t("ingresaCorreo")}
          />
          <Form.Input
            placeholder={t("ingresaContrasena")}
            label={t("contrasena")}
            name='password'
            type='password'
          />
          <Form.Input
            placeholder={t("repiteContrasena")}
            label={t("contrasena")}
            name='confirmPassword'
            type='password'
          />
        </div>
        <Form.SubmitButton buttonText={t("crearCuenta")} isLoading={isLoading} />
        <Form.Footer
          description={t("yaCuenta")}
          textLink={t("inicioSesion")}
          link='/login'
        />
      </Form>
      </div>
  )
}
