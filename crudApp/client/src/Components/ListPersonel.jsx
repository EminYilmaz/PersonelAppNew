import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import EditPersonel from './EditPersonel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios, * as others from 'axios';



const ListPersonel = () => {

    const [booleanValue, setBooleanValue] = useState(false);
    const navigate = useNavigate();
    const [personels, setPersonels] = useState([]);




    const getAllPers = async () => {
        
            toogleBoolean();
        await Axios.get("http://localhost:3001/get").then((response) => {
            console.log(response.data);
            setPersonels(response.data);

        });
    }



    const delPerson = async (id) => {

        await Axios.delete(`http://localhost:3001/delete/${id}`);

    }

    const goEditPage = () => {

        navigate('/EditPersonel');
    }

    const toogleBoolean = () => {

        setBooleanValue(!booleanValue);

    }

    return (
        <TableContainer component={Paper}>
            <Table

                sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Personel No</TableCell>
                        <TableCell align="center">Ad-Soyad</TableCell>
                        <TableCell align="center">Bölüm</TableCell>
                        <TableCell align="center">Güncelle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>



                    {personels.map((personel) => (
                        <TableRow
                            key={personel.idPer}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {personel.idPer}
                            </TableCell>
                            <TableCell index={personels.idPer} align="center">{personel.name}</TableCell>
                            <TableCell align="center">{personel.dept}</TableCell>
                            <TableCell align="center">
                                <Button size="small" variant="outlined" component={Link} to={`/edit/${personel.idPer}`} sx={{ marginRight: 1 }}>Güncelle

                                </Button>

                                <Button
                                    size="small" variant="outlined" value={personel.idPer}
                                    onClick={() => { delPerson(personel.idPer); toogleBoolean() }} color="warning" startIcon={<DeleteIcon />}>
                                    Sil</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default ListPersonel;