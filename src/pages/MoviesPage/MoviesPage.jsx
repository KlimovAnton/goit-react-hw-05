import { Formik, Form, Field } from "formik";
import { IoSearch } from "react-icons/io5";
import css from "./MoviesPage.module.css";
import clsx from "clsx";


export default function MoviesPage() {
    return (
        <Formik
            initialValues={{ query: ""}}
            onSubmit={(values, actions) => {
                if (values.query.trim() === "") {
                    return;
                }
                console.log(values.query);
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <Field className={css.input} type="text" name="query" />
                <button className={css.btn} type="submit"><IoSearch className={css.icon} size={15} /></button>
            </Form>
        </Formik>
    )
}