
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from "./ContactForm.module.css"

const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too short!")
        .max(12, "Too long!")
        .required("Required"),
});
 
export default function ContactForm({onAdd}) {

    const handlerSubmit = (values, actions) => {
        onAdd({
            ...values,
            id: nanoid()
        });
        actions.resetForm();
    }
    
    return (
        <Formik initialValues={{
            name: "",
            number: "",
        }}
            validationSchema={UserSchema}
            onSubmit={handlerSubmit}
        >
        <Form className={css.form}>
            <div className={css.formGroup}>
                    <label>Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage className={css.error} name='name' component="span"/>
            </div>
            <div className={css.formGroup}>
                    <label>Number</label>
                    <Field type="tel" name="number" />
                    <ErrorMessage className={css.error} name="number" component="span"/>
            </div>
            <button type="submit" className={css.submitBtn}>Add contact</button>
            </Form>
            </Formik>
    )
}