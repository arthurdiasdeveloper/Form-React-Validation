import { Button, Box, TextField } from "@material-ui/core";
import { Field, Form, Formik }  from "formik";
import { object, string} from "yup";


const initialValues = {
    email:"",
    name:"",
    password:""   
}






const MaterialForm = () =>{
    return <div className="MaterialForm">

        <Formik initialValues={initialValues} onSubmit={(values, FormikHelpers)=>{
            console.log(values);
            FormikHelpers.resetForm();
        }}
        
        validationSchema={object({
            // o email é do tipo string e é obrigatorio
            email : string().required("Please enter email!").email("invalid email"),
            name : string().required("Please enter name").min(2, "Name to short "),
            password : string().required("Please enter password").min(2, "Password shoud be minimun seven caracters!")
        })}
        
        
        
        >

            {({errors, isValid, touched, dirty})=>(<Form>
                <Field name="email"

                    type="email"
                    as={TextField} 
                    variant="outlined"
                    color="primary" 
                    label="E-mail" fullWidh
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    // A propriedade HelperText pertence ao material ui e ela permite mostrar o texto de error
                    helperText={(Boolean(touched.email) &&  errors.email)}
                    />
                    {/*O Box heigth serve para criar distanciamento das Fieds  */}
                 < Box height={14}/>
                <Field name="name"

                    type="name"
                    as={TextField} 
                    variant="outlined"
                    color="primary" 
                    label="Name" fullWidh
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                    />

                <Box height={14}/>
                    <Field name="password"

                    type="password"
                    as={TextField} 
                    variant="outlined"
                    color="primary" 
                    label="Password" fullWidh
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                    />
                
                
                <Box height={16}/>
                <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                size="large" 
                // disable permite que o button fique desabilitado ao carregar o formulário.
                disabled={!dirty || !isValid}
                >Sign up
                </Button>
            </Form>)}

        </Formik>
    </div>
}

export default MaterialForm