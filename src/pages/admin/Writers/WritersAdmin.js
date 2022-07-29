import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const WritersAdmin = () => {
  const [writers,setWriters] = useState()

  useEffect(() => {
    
    axios.get('https://e-bookalypse.herokuapp.com/api/writers?page=20').then(
      (res)=>{setWriters(res.data.data)}
    ).catch((err) => {console.log(err)});

    
  }, []);


  let deleteWriter = (e,id)=>{
    const deletedItem = writers.find((w)=> w._id === id)

    axios.delete("http://localhost:8080/api/admin/writer/"+id,{params:{icon:deletedItem.image}}).then((res)=>console.log(res)).catch((err)=>console.log(err));
  }

  return (
    <div className='container'>
        <div className='addwriter'>
        <Link to="/admin/writer/addwriter" className='btn btn-success' >Add Writer</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">bio</th>
              <th scope="col">date of birth</th>
              <th scope="col">place of birth</th>
              <th scope="col">gender</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>

  
            </tr>
          </thead>
          <tbody>
          {writers? writers.map((writer,i)=>{
              return (
              <tr key={writer._id}>
                <td >{i+1}</td>
                <td ><img width="150px" src={"../uploads/writers/"+ writer.image} /></td>
                <td >{writer.name}</td>
                <td >{writer.bio}</td>
                <td >{writer.date_birth}</td>
                <td >{writer.place_birth}</td>
                <td >{writer.gender}</td>
                <td ><Link to={'/admin/writer/updatewriter/'+writer._id} className="btn btn-primary" >Update</Link></td>

                <td ><a className="btn btn-danger" onClick={(e,writerid)=>deleteWriter(e,writer._id)}>Delete</a></td>

              </tr>
              )
            })
            :
            null
            }

          </tbody>
        </table>
     

    </div>
  )
}

export default WritersAdmin