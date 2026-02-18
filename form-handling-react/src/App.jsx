import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      {/* Task 0: Controlled Components Form */}
      <RegistrationForm />
      
      <hr />
      
      {/* Task 0: Formik Form */}
      <FormikForm />
    </div>
  );
}

export default App;