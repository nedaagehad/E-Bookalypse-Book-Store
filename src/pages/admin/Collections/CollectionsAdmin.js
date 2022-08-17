import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { booksApi } from '../../../store/services'

const CollectionsAdmin = () => {
    const [collections,setCollections]= useState()
    const {data,isLoading,error} = booksApi.useGetAllCollectionsQuery()
    const [deleteCollection] = booksApi.useDeleteCollectionMutation()
    useEffect(() => {
        if(data){
            console.log(data)
            setCollections(data)
        }
    }, [data]);

    const deleteCol =(e,id)=>{
        deleteCollection(id).then((res)=>{
            console.log(res)
        }).catch((err)=>{console.log(err) })
    }

  return (
    <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">image</th> */}
              <th scope="col">title</th>
              <th scope="col">description</th>
              <th scope="col">price</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>


            </tr>
          </thead>
          <tbody className="text-white">
          
          {/* {console.log(books)} */}
          {collections ? collections.map((c,i)=>{
             
              return (
              <tr key={c._id}>
                <td >{i+1}</td>
                {/* <td ><img width="150px" src={"../uploads/books/"+ book.poster} /></td> */}
                <td >{c.title}</td>
                <td >{c.description}</td>
                <td >{c.collectionPrice} EGP</td>
                <td ><Link to={'/admin/collection/updateCollection/'+c._id} className="btn btn-primary" >Update</Link></td>

                <td ><a className="btn btn-danger" onClick={(e)=>deleteCol(e,c._id)}>Delete</a></td>

              </tr>
              )
            })
            :
            null
            }
          </tbody>
        </table>
        <div className="add-btn">
            <Link to="/admin/collection/addCollection" className='btn btn-success text-white' >Add Collection</Link>

          </div>
        </div>
    </div>
  )
}

export default CollectionsAdmin