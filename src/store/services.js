import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';



const userToken = localStorage.getItem('userToken');
console.log(userToken);

export const api=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:"https://e-bookalypse.herokuapp.com/"}),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userData)=>({
                url:"/login",
                method: 'POST',
                body: userData,
            })

        })

    })
})

export const booksApi = createApi({
    reducerPath:'booksApi',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8080/api/"}),

    // baseQuery:fetchBaseQuery({baseUrl:"https://e-bookalypse.herokuapp.com/api/"}),
    endpoints:(builder)=>({
        
        getAllBooks : builder.query({
            query: (arg = ' ') => {
                const { page ,limit,category,priceMin,priceMax,priceSort  } = arg;
                // for(let i = 0; i < category.length; i++){
                //     category.
                // }
                let newCategory = ''
                if(category){

                    if(category.length > 1){
                        for(let i = 0; i < category.length; i++){
                            newCategory += "&category="+category[i]
                        }
                    }else if(category.length == 1){
                        newCategory= "category="+category[0]
                    }
                }

                if(newCategory == " "){
                    return {
                        url: `books`,
                        params: { page,limit,priceMin,priceMax,priceSort },
                      };
                }else{
                    
                    return {
                      url: `books/?${newCategory}`,
                      params: { page,limit,priceMin,priceMax,priceSort },
                    };
                }
                
              },
        }),
        getBookById:builder.query({
            query:(bookID)=>{
                console.log(bookID)
                return{
                    url:`admin/book/${bookID}`,
                    // params: { page},

                }
            }
        }),
        addNewBook : builder.mutation({
            query:(bookData)=>({
                url:"/admin/book",
                method: 'POST',
                body: bookData,
                headers:{"authorization":`Bearer ${userToken}`}

                
                
            })
        }),
        updateNewBook:builder.mutation({
            query:({bookNewData,bookid})=>{
                console.log(bookNewData)
                return{
                    url:`/admin/books/${bookid}`,
                    method:"PUT",
                    body: bookNewData,
                    headers:{"authorization":`Bearer ${userToken}`}

                }
            }
        }),
        deleteBook : builder.mutation({
            query:({bookId,bookOldFiles})=>{
                const {icon,src} = bookOldFiles
                console.log(bookOldFiles)
                return{
                    url:`admin/books/${bookId}`,
                    method:"DELETE",
                    params:{icon,src},
                    headers:{"authorization":`Bearer ${userToken}`}

                    
                }
            }
        }),
        // Writers 
        getAllWriters:builder.query({
            query:(args='')=>{
                const { page ,limit} = args;
                console.log(page)
                return{
                    url:"writers",
                    params: { page},

                }
            }
        }),
        getWriterById:builder.query({
            query:(writerId)=>{
                // console.log(writerId)
                return{
                    url:`writer/${writerId}`,
                    // params: { page},

                }
            }
        }),
        addNewWriter:builder.mutation({
            query:(writerData)=>({
                    url:"/admin/writer",
                    method:"POST",
                    body:writerData,
                    headers:{"authorization":`Bearer ${userToken}`}

                
            })
        }),
        updateWriter : builder.mutation({
            query:({writerNewData,writerId})=>{
                // console.log(bookid)
                return{
                    url:`admin/writer/${writerId}`,
                    method:"PUT",
                    body: writerNewData,
                    headers:{"authorization":`Bearer ${userToken}`}

                }
            }
        }),
        deleteNewWriter:builder.mutation({
            query:({writerId,icon})=>{
            
                return{
                    url:`/admin/writer/${writerId}`,
                    method:"DELETE",
                    params:{icon},
                    headers:{"authorization":`Bearer ${userToken}`}

                }
            }
        }),
        // Categories
        getAllCategories:builder.query({
            query:(args='')=>{
                // const { page ,limit} = args;
                // console.log(page)
                // console.log(userToken)
                return{
                    url:"categories",
                    // params: { page},
                }
            }
        }),
        getCategoryById:builder.query({
            query:(categoryId)=>{
                console.log(categoryId)
                return{
                    url:`categorie/${categoryId}`,
                    // params: { page},

                }
            }
        }),
        addNewCategory:builder.mutation({ 
            
            query:(categoryData)=>(
                {
                url:"/admin/categorie",
                method:"POST",
                body:categoryData,
                headers:{"authorization":`Bearer ${userToken}`}

            })
        }),
        updateCategory:builder.mutation({
            query:({categoryNewData,categoryId})=>{
                console.log(categoryNewData)
                console.log(categoryId)
                return{
                    url:`admin/categorie/${categoryId}`,
                    method:"PUT",
                    body: categoryNewData,
                    headers:{"authorization":`Bearer ${userToken}`}

                }
            }
        }),
        deleteCategory:builder.mutation({
            query:({categoryId,icon})=>{
            
                return{
                    url:`/admin/categorie/${categoryId}`,
                    method:"DELETE",
                    params:{icon},
                    headers:{"authorization":`Bearer ${userToken}`}

                }
            }
        }),
        
        // LOGS
        getAllLogs:builder.query({
            query:(args='')=>{
                const {date } = args
                return{
                    url:`/admin/logs/${date}`,
                    headers:{"authorization":`Bearer ${userToken}`}

                }
            }
        }),

        // Promotions
        getAllPromotions:builder.query({
            query:()=>{
                return{
                    url:"promotions"
                }
            }
        }),
        addNewPromotion:builder.mutation({
            query:(promtionData)=>(
                console.log(promtionData),
                {
                url:"/admin/promotion",
                method:"POST",
                body:promtionData,
                headers:{"authorization":`Bearer ${userToken}`}

                }
            )
            
        }),
        updateCurrentPromotion:builder.mutation({
            query:({promtionData,promotionId})=>{
        
                return{
                    
                    url:`admin/promotion/${promotionId}`,
                    method:"PUT",
                    body:promtionData,
                    headers:{"authorization":`Bearer ${userToken}`}
                }

            }
           
        }),
        getOnePromotion:builder.query({
            query:(promotionId)=>{
                return{
                    // /api/promotion/:title
                    url:`promotion/${promotionId}`
                }
            }
        }),
        deletePromotion:builder.mutation({
            query:(promotionId)=>({
                url:`/admin/promotion/${promotionId}`,
                method:"DELETE",
                headers:{"authorization":`Bearer ${userToken}`}

            })
        })
    })  
})


// export const {useGetBooksAPi} = booksApi