import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { setFormData } from '../store/formSlice';
import '../style.css';


function MainForm() {

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        console.log('Дані форми:', values);
        dispatch(setFormData(values));
        resetForm();
    };

    const RegistrationSchema = object().shape({
        name: string()
            .min(2, "Занадто коротке ім'я")
            .max(50, "Занадто довге ім'я")
            .required("Обов'язкове поле"),

        email: string()
            .email('Неправильний формат електронної пошти')
            .required("Обов'язкове поле"),

        password: string()
            .min(8, 'Пароль повинен містити мінімум 8 символів')
            .max(60, 'Пароль повинен містити максимум 60 символів')
            .matches(/[a-z]/, "Пароль повинен мати хоч одну рядкову літеру")
            .matches(/[A-Z]/, "Пароль повинен мати хоч одну велику літеру")
            .matches(/[0-9]/, "Пароль повинен мати хоч одну цифру")
            .matches(/[@$!%*?&_.,-]/, "Пароль повинен мати хоч один спецсимвол")
            .required("Обов'язкове поле"),

        age: number()
            .min(6, 'Ваш вік повинен бути не менше 6 років')
            .max(110, 'Ваш вік повинен бути не більше 110 років')
            .required("Обов'язкове поле"),
            
    })

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', age: '' }}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="form">

                    <ErrorMessage name="name" component="div" className="error" />
                    <Field
                        className='input'
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                    <Field
                        className='input'
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    
                    <ErrorMessage name="password" component="div" className="error" />
                    <Field
                        className='input'
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <ErrorMessage name="age" component="div" className="error" />

                    <Field
                        className='input'
                        type="number"
                        name="age"
                        placeholder="age"
                    />
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                    >
                        Відправити
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default MainForm;