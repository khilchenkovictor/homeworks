import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        sex: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        alert(`
            Name: ${formData.firstName}
            Second Name: ${formData.lastName}
            Phone: ${formData.phone}
            Email: ${formData.email}
            Sex: ${formData.sex}
        `);
    };

    return (
        <Paper elevation={4} className='flex flex-col mt-20 ml-5 border-1 border-gray-500 rounded-lg w-auto w-fit items-center pb-5'>
            <h3
                className='text-gray-600 uppercase mt-5'
            >Registration</h3>
            <div className='flex gap-5 p-5'>
                <TextField 
                    name="firstName"
                    id="firstName" 
                    label="Name" 
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    name="lastName"
                    id="lastName" 
                    label="Second Name" 
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-5 mb-5 pr-5 pl-5'>
                <TextField
                    name='phone'
                    id="phone"
                    label="Phone Number"
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}

                />
                <TextField id="email" label="Email" variant="outlined" />
            </div>
            <div className='flex gap-5 mb-5 pr-5 pl-5'>
                <FormControl className='w-50'>
                    <InputLabel id="materialID">Sex</InputLabel>
                    <Select
                        name="sex"
                        value={formData.sex}
                        label="Sex"
                        onChange={handleChange}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Prefer not to say</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Button 
                className='w-50' 
                variant="contained" 
                color="success"
                onClick={handleSubmit}
            >
                Create Account
            </Button>
        </Paper>
    )
}

export default Form;