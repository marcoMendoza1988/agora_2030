import * as Yup from "yup"
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { FormikValues, useFormik } from "formik"
import Button from "../../atoms/Button";
import axios from "axios";
import LoaderIcon from "../../atoms/LoaderIcon";
import { useTranslation } from "react-i18next";

const ContactForm:React.FC = () => {
    const [ response, setResponse ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<any>(null);
    const {t} = useTranslation();

    const initialValues = {
        name: "",
        lastName: "",
        email: "",
        profession: "",
        company: "",
        country: ""
    }

    const inputValues = {
        name: t("name"),
        lastName: t("lastname"),
        email: t("email"),
        profession: t("profession"),
        company: t("company"),
        country: t("country")
    }

    const isRequired = "Este campo es requerido";

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2, "Minimo 6 caracteres").required(isRequired),
        lastName: Yup.string().min(2, "Minimo 6 caracteres").required(isRequired),
        email: Yup.string().email('Ingresa un correo valido').required(isRequired),
        profession: Yup.string().min(3, 'Minimo 7').required(isRequired),
        company: Yup.string().min(3, 'Minimo 3 caracteres').required(isRequired),
        country: Yup.string().min(3, "Minimo 3 caracteres").required(isRequired)
    });

    const formik = useFormik({ 
        validationSchema:validationSchema,
        initialValues, 
    onSubmit: (values, { resetForm }) => {
        fetchBlogData(values, resetForm);
    } })

    const fetchBlogData = async(values: any, resetForm: any) => {
        setLoading(true);
        try {
            const response: any = await axios.post(`https://5vj94.wiremockapi.cloud/newslatter`,{
                ...values
            });
          
          if (response?.status !== 201) {
            throw new Error('No se pudieron cargar las tareas.');
          }
          setResponse('Se a enviado con exito');
          resetForm();
          setLoading(false);
        } catch (error: any) {
          setError(error?.message);
          setLoading(false);
        }
    };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8"> 
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {Object.keys(initialValues).map((key) => {

            return (
                <div className="flex flex-col">
                    <input className={`focus:outline-none text-white p-[5px] bg-[#333333] border-b-[1px] ${(formik.touched as FormikValues)[key] && (formik.errors as FormikValues)[key] && 'border-red-500'}`}
                        key={key}
                        id={key}
                        name={key}
                        placeholder={(inputValues as FormikValues)[key]}
                        value={(formik.values as FormikValues)[key]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span className="text-red-500 text-sm">{(formik.touched as FormikValues)[key] && (formik.errors as FormikValues)[key] && (formik.errors as FormikValues)[key]}</span>
                </div>
            )
            })}
        </div>
        <div>
            <Button 
                borderRadius="rounded-3xl py-[8px] px-[24px] flex gap-2" 
                maxWidth="max-w-full md:max-w-[fit-content]" 
                disabled={loading}
                type="submit" 
                color="text-white" 
                backgroundColor="bg-[#c1285d]">{loading && <LoaderIcon />} <span className="text-white">{t('Enviar')}</span></Button>
        </div>
      </form>
    </>
  )
}

export default ContactForm;