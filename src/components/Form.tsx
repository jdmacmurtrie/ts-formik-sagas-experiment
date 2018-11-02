import * as React from "react";
import { connect } from "react-redux";

import { Field, Form, Formik, FormikProps } from "formik";

interface IFormProps {
  name?: string;
  luckyNumber?: number;
  submitForm: (values: any) => void;
}

interface IFormValues {
  name?: string;
  luckyNumber?: number;
}

class MyForm extends React.Component<IFormProps> {
  constructor(props: IFormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(values: IFormValues) {
    console.log(values);

    this.props.submitForm(JSON.stringify(values));
  }

  public render() {
    return (
      <Formik
        initialValues={{ name: "", luckyNumber: 7 }}
        onSubmit={this.handleSubmit}
        render={(formikBag: FormikProps<IFormValues>) => (
          <Form>
            <label>
              Your Name:
              {"  "}
              <Field name="name" />
            </label>
            <br />
            <label>
              Your Lucky Number:
              {"  "}
              <Field name="luckyNumber" component="select">
                <option value={7}>Seven</option>
                <option value={88}>Eighty-Eight</option>
                <option value={29}>Twenty-Nine</option>
              </Field>
            </label>
          </Form>
        )}
      />
    );
  }
}

function mapDispatchToProps(
  dispatch: any
): {
  submitForm: (submission: { name: string; luckyNumber: number }) => void;
} {
  return {
    submitForm(submission) {
      dispatch({
        luckyNumber: submission.luckyNumber,
        name: submission.name,
        type: "SUBMIT_FORM"
      });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(MyForm);
