'use client'

import { Form } from '../../components/Form'
import { useAuthFetch } from '../../hooks/useAuthFetch'
import { useLoading } from '../../hooks/useLoading'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function LoginPage () {
  const { t, i18n } = useTranslation();
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const forgetPassword = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'forget-password',
      formData
    })
    finishLoading()
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen !text-black p-0">
      <Form
        title={t("recuperarContrasena")}
        description={t("formularioRecuperarContrasena")}
        onSubmit={forgetPassword}
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label={t("ingresaCorreo")}
            name='email'
            placeholder={t("ingresaCorreo")}
          />
        </div>
        <Form.SubmitButton
          buttonText={t("recuperarContrasena")}
          isLoading={isLoading}
        />
        <Form.Footer
          description={t("volverInicio")}
          textLink={t("inicio")}
          link='/'
        />
      </Form>
    </div>
  )
}
