import { Formik, Form, Field } from "formik";
// import styled from 'styled-components';

// const Input = styled(Field)`
// font-size: 40px;
// f
// `

export const MaterialEditorForm = ({onSubmit, }) => {
const handleSubmit = async (values, actions) => {
   await onSubmit(values);
   actions.setSubmitting(false);
   actions.resetForm();
}


return (<Formik 
initialValues={{title: '', link: ''}} 
onSubmit={handleSubmit}>
   {({isSubmitting}) =>(
       <Form>
       <label>
          Опис
          <Field name="title" type="text" /></label>
          <br/>
          <label>
          Посилання
          <Field name="link" type="text" /></label>
          <br/>
       <button type="submit" disabled={isSubmitting}>Додати матеріал</button>
    </Form>
   )}

</Formik>
);
};