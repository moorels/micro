import { Navbar } from '../components/Navbar.js'
import React,{ useState} from 'react'
import styles from '../styles/Home.module.css'
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();


function Service({data}) {

  const [formData,setFormData] = useState ({})
  const [movies,setMovies] = useState(data)

async function saveMovie(e) {
  e.preventDefault();
  setMovies([...movies,formData])
  
const response = await fetch('/api/movies',{
  method: 'POST',
  body: JSON.stringify(formData)
}
)
}
    return (
        <div>
            <Navbar/>
            Service Request
            <div>
                <div className={styles.container}>
            test
            </div>
        </div>
        </div>
    )
}

export default Service


export async function getServerSideProps() {
  const movies = await prisma.user.findMany();
  return {
    props: {
      data:movies
    }}}