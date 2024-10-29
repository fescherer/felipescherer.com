'use client'

import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type FormValues = {
  name: string
  email: string
  message: string
  access_key: string
}

type PropsFormComponent = {
  t: any
}

export function FormComponent({ t }: PropsFormComponent) {
  const { register, handleSubmit, reset } = useForm<FormValues>()

  const [isSubmitting, setIsSubmitting] = useState(false)

  function onSubmit(data: FormValues) {
    if (data.email && data.message && data.name) {
      setIsSubmitting(true)
      axios.post('https://api.web3forms.com/submit', { ...data, access_key: 'aa04600c-d258-4c8e-9987-3384d0f470ee' })
        .then(() => {
          toast.success(t['toast-sucess'])
        })
        .catch(e => console.log(e))
        .finally(() => {
          setIsSubmitting(false)
          reset()
        })
    } else toast.warning(t['toast-error'])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-theme="light" className="flex w-80 flex-col gap-2 rounded border border-layer-1 bg-layer-1 p-4 shadow-lg">
      <label htmlFor="input-group-1" className="block text-sm font-medium text-on-layer-1-l1 opacity-90 ">
        {t.field.name.label}
      </label>

      <div className="relative mb-3">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-on-layer-1-l1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 opacity-70"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
        </div>

        <input {...register('name')} type="text" id="input-group-1" className="block w-full rounded-lg border border-brand-secondary bg-layer-1  p-2.5 ps-10 text-sm text-on-layer-1-l1 focus:border-brand-primary focus:ring-brand-primary" placeholder={t.field.name.placeholder} />
      </div>

      <label htmlFor="input-group-1" className="block text-sm font-medium text-on-layer-1-l1 opacity-90">
        {t.field.email.label}
      </label>

      <div className="relative mb-3">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-on-layer-1-l1 opacity-75">
          <svg className="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>

        <input type="email" {...register('email')} id="input-group-1" className="block w-full rounded-lg border border-brand-secondary bg-layer-1  p-2.5 ps-10 text-sm text-on-layer-1-l2 focus:border-brand-primary focus:ring-brand-primary" placeholder={t.field.email.placeholder} />
      </div>

      <label htmlFor="message" className="block text-sm font-medium text-on-layer-1-l1 opacity-90">
        {t.field.message.label}
      </label>

      <textarea {...register('message')} id="message" className="mb-6 block w-full rounded-lg border border-brand-secondary bg-layer-1 p-2.5 text-sm  text-on-layer-1-l2 focus:border-brand-primary focus:ring-brand-primary" placeholder={t.field.message.placeholder} />
      <button className="btn btn-primary disabled:cursor-wait disabled:bg-brand-secondary" type="submit" disabled={isSubmitting}>{isSubmitting ? t.submit.loading : t.submit.load}</button>
    </form>
  )
}
