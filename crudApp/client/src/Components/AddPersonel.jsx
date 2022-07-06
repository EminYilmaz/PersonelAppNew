import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Axios from 'axios';



const AddPersonel = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");


    const cleanData = () => {

        setName("");
        setDepartment("");
    }


    const goList = () => {
        navigate('/list');
    }


    const AddPersonel = async () => {

        await Axios.post("http://localhost:3001/create", {
            name: name,
            department: department
        }).then(() => {
            console.log("Kayıt Başarılı");
        });


    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <Typography variant="h3" align="center" component="div">
                Personel Ekle
            </Typography>
            <TextField id="standard-basic" label="Ad-Soyad" value={name} variant="standard" onChange={(e) => setName(e.target.value)} /><br />
            <TextField id="standard-basic" label="Bölüm" value={department} variant="standard" onChange={(e) => setDepartment(e.target.value)} /><br />
            <Button variant="contained" onClick={() => { AddPersonel(); cleanData(); goList() }}>
                Ekle

            </Button>
        </Box>
    )
}

export default AddPersonel;