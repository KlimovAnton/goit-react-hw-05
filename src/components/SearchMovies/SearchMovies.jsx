import { Formik, Form, Field } from "formik";
import { IoSearch } from "react-icons/io5";

export default function SearchMovies () {
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
            <Form>
                <Field type="text" name="query"/>
                <button type="submit"><IoSearch size={15} /></button>
            </Form>
        </Formik>
    )
}