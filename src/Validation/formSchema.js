import * as yup from 'yup'


const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Gotta type something in here, buddy.')
        .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge'], 'Gotta pick one, buddy.'),
    spec: yup.string(),

    pepperoni: yup.boolean(),
    chicken: yup.boolean(),
    bananaPepper: yup.boolean(),
    bellPepper: yup.boolean(),
    jalapeno: yup.boolean(),
    xtraCheese: yup.boolean(),
})

export default formSchema;