import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { booksApi } from '../../../store/services'

const PromotionsAdmin = () => {
    const {data,isLoading,error} = booksApi.useGetAllPromotionsQuery()
    const [promotions,setAllpromotions] =useState()
    const [deletePromotion,response] = booksApi.useDeletePromotionMutation()

    useEffect(() => {
        if(data){
            setAllpromotions(data)
            console.log(data)
        }
    }, [data]);


    const deleteItem = (id)=>{
        deletePromotion(id).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

  return (
    <div className="container">
    <Link to={'/admin/promotion/addPromotion'} className="btn btn-primary" >Add New Promotion</Link>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">title</th>
          <th scope="col">description</th>
          <th scope="col">discount_rate</th>
          <th scope="col">start_date</th>
          <th scope="col">end_date</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>


        </tr>
      </thead>
      <tbody>
      
      {promotions !== undefined  ? promotions.map((pormotion,i)=>{
          return (
          <tr key={pormotion._id}>
            <td >{i+1}</td>
            <td >{pormotion.title}</td>
            <td >{pormotion.description}</td>
            <td >{pormotion.discount_rate * 100} %</td>
            <td >{pormotion.start_date}</td>
            <td >{pormotion.end_date}</td>
            <td ><Link to={'/admin/promotion/updatePromotion/'+pormotion._id} className="btn btn-primary" >Update</Link></td>

            <td ><a className="btn btn-danger"             onClick={(e)=>deleteItem(pormotion._id)} >Delete</a></td>

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

export default PromotionsAdmin