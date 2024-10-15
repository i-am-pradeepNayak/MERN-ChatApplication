import { FormProvider as Form } from "react-hook-form";

const FormProvider = ({ methods, onSubmit, children }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
