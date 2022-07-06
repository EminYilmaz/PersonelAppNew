import React, { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Axios from 'axios';





const EditPersonel = () => {



    const [personels, setPersonels] = useState([]);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [Idper, setIdper] = useState(0);
    let navigate = useNavigate();
    let { id } = useParams();






    useEffect(() => {
        loadPersonelData();
    }, []);



    const loadPersonelData = async (perNo) => {
        await Axios.get(`http://localhost:3001/getper/${id}`).then((response) => {
            setPersonels(response.data);
        });

    }



    const updatePersonel = async (id) => {

        await Axios.put(`http://localhost:3001/update/${id}`, {
            name: name,
            department: department
        });

    }


    const goList = () => {
        navigate('/list');
    }

    return (

        <div >

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <Typography variant="h3" align="center" component="div">
                    Personel Güncelle
                </Typography>
                {personels.map((personel) => (
                    <div>
                        <TextField id="standard-basic" label={personel.name} value={name} variant="standard" onChange={(e) => setName(e.target.value)} /><br />
                        <TextField id="standard-basic" label={personel.dept} value={department} variant="standard" onChange={(e) => setDepartment(e.target.value)} /><br />

                        <Button variant="contained" onClick={() => { updatePersonel(personel.idPer); goList() }}>
                            Ekle

                        </Button>
                    </div>))
                }
            </Box >

        </div>
    )
}

export default EditPersonel;