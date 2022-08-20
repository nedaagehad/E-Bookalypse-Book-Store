import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



let userToken = localStorage.getItem('userToken');
// console.log(userToken);



export const booksApi = createApi({
    reducerPath:'booksApi',
    // baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8080/"}),

    baseQuery:fetchBaseQuery({baseUrl:"https://e-bookalypse.herokuapp.com/",
    prepareHeaders: (headers, { getState , endpoint ,forced}) => {
        const userToken = localStorage.getItem('userToken');
        // If we have a token set in state, let's assume that we should be passing it.
        // console.log(endpoint)
        if (userToken !== null) {
            headers.set('authorization', `Bearer ${userToken}`);
          }

          return headers;
      },

}),
    // keepUnusedDataFor: 1000,
    // refetchOnMountOrArgChange: 3000,
    tagTypes:['cart','wishlist','updateCollection','updatePromotion','updateWriter','updatedBooks','catUpdate','search','updateReviews'],
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userData)=>{
                return{
                    url:"/login",
                    method: 'POST',
                    body: userData,
                }

            }
                
           
            
        }),
        getAllBooks : builder.query({
            query: (arg = ' ') => {
                const { page ,limit,category,priceMin,priceMax,priceSort ,writer ,salesSort} = arg;
                // for(let i = 0; i < category.length; i++){
                //     category.
                // }
                // console.log(writer)
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
                        params: { page,limit,priceMin,priceMax,priceSort,writer,salesSort },
                      };
                }else{
                    
                    return {
                      url: `books/?${newCategory}`,
                      params: { page,limit,priceMin,priceMax,priceSort,writer,salesSort },
                    };
                }
                
              },
              providesTags:['updatedBooks']

        }),
        getTotalBooks:builder.query({
            query:()=>{
                return{
                    url:"/books-total",
 
                }
            }
        }),
        getAllBooksCount:builder.query({
            query:()=>{
                return{
                    url:"/books-count",
 
                }
            }
        }),
        getUserBooks:builder.query({
            query:()=>{
                return{
                    url:"/book-shelf"
    
                }
            }
        }),
        getBookById:builder.query({
            query:(bookID)=>{
                // console.log(bookID)
                return{
                    url:`/book/${bookID}`,
                    // params: { page},

                }
            
            },
            
            providesTags:['updatedBooks']
            
        }),
        addNewBook : builder.mutation({
            query:(bookData)=>({
                url:"/book",
                method: 'POST',
                body: bookData,

            }
            ),
            invalidatesTags:['updatedBooks']
        }),
        updateNewBook:builder.mutation({
            query:({bookNewData,bookid})=>{
                // console.log(bookNewData)
                return{
                    url:`/book/${bookid}`,
                    method:"PUT",
                    body: bookNewData,
 
                }
            },
            invalidatesTags:['updatedBooks']

        }),
        deleteBook : builder.mutation({
            query:({bookId,bookOldFiles})=>{
                const {icon,src} = bookOldFiles
                // console.log(bookOldFiles)
                return{
                    url:`/book/${bookId}`,
                    method:"DELETE",
                    params:{icon,src},
 
                    
                }
            },
            invalidatesTags:['updatedBooks']

        }),
        // Writers 
        getTotalWriters:builder.query({
            query:()=>{
                return{
                    url:"/writers-total",
                 }
            }
        }),
        getAllWriters:builder.query({
            query:(args='')=>{
                const { page ,limit} = args;
                // console.log(page)
                return{
                    url:"writers",
                    params: {page},

                }
            },
            providesTags:['updateWriter']

        }),
        getWritersCount:builder.query({
            query:()=>{
                return{ 
                    url:"/writers-count",
 
                }
            }
        }),
        getWriterById:builder.query({
            query:(writerId)=>{
                // console.log(writerId)
                return{
                    url:`/writer/${writerId}`,
                    // params: { page},

                }
            },
            providesTags:['updateWriter']

        }),
        addNewWriter:builder.mutation({
            query:(writerData)=>({
                    url:"/writer",
                    method:"POST",
                    body:writerData,
 
                
            }
            ),
            invalidatesTags:['updateWriter']

            
        }),
        updateWriter : builder.mutation({
            query:({writerNewData,writerId})=>{
                // console.log(bookid)
                return{
                    url:`/writer/${writerId}`,
                    method:"PUT",
                    body: writerNewData,
 
                }
            },
            invalidatesTags:['updateWriter']

        }),
        deleteNewWriter:builder.mutation({
            query:({writerId,icon})=>{
            
                return{
                    url:`/writer/${writerId}`,
                    method:"DELETE",
                    params:{icon},
 
                }
            },
            invalidatesTags:['updateWriter']

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
            },
            providesTags:['catUpdate']
        }),
        getCategoryById:builder.query({
            query:(categoryId)=>{
                // console.log(categoryId)
                return{
                    url:`categorie/${categoryId}`,
                    // params: { page},

                }
            },
            providesTags:['catUpdate']

        }),
        addNewCategory:builder.mutation({ 
            
            query:(categoryData)=>(
                {
                url:"/categorie",
                method:"POST",
                body:categoryData,
 
            }),
            invalidatesTags:['catUpdate']
        }),
        updateCategory:builder.mutation({
            query:({categoryNewData,categoryId})=>{
                // console.log(categoryNewData)
                // console.log(categoryId)
                return{
                    url:`categorie/${categoryId}`,
                    method:"PUT",
                    body: categoryNewData,
 
                }
            },
            invalidatesTags:['catUpdate']

        }),
        deleteCategory:builder.mutation({
            query:({categoryId,icon})=>{
            
                return{
                    url:`/categorie/${categoryId}`,
                    method:"DELETE",
                    params:{icon},
 
                }
            },
            invalidatesTags:['catUpdate']

        }),
        
        // LOGS
        getAllLogs:builder.query({
            query:(args='')=>{
                const {date } = args
                return{
                    url:`/admin/logs/${date}`,
 
                }
            }
        }),
        // Collections 
        getAllCollections:builder.query({
            query:()=>{
                return{
                    url:"collections"
                }
            },
            providesTags:['updateCollection']

        }
        
        
        ),
        getCollectionById:builder.query({
            query:(id)=>{
                return{
                    url:`/collection/${id}`,
 
                }
            },
            providesTags:['updateCollection']

        }),
        addCollection:builder.mutation({
            query:(data)=>{
                return{
                    url:"/collection",
                    method:"POST",
                    body:data,
 
                }
            },
            invalidatesTags:['updateCollection']
        }),
        updateCollection:builder.mutation({
            query:({data,id})=>{
                return{
                    url:`/collection/${id}`,
                    method:"PUT",
                    body:data,
 
                }
            },
            invalidatesTags:['updateCollection']

        }),
        deleteCollection:builder.mutation({
            query:(id)=>{
                return{
                    url:`/collection/${id}`,
                    method:"DELETE",
 
                }
            },
            invalidatesTags:['updateCollection']

        }),

        // Promotions
        getAllPromotions:builder.query({
            query:()=>{
                return{
                    url:"/promotions"
                }
            },
            providesTags:['updatePromotion']
        }),
        addNewPromotion:builder.mutation({
            query:(promtionData)=>(
                // console.log(promtionData),
                {
                url:"/promotion",
                method:"POST",
                body:promtionData,
 
                }
            ),
            invalidatesTags:['updatePromotion']

            
        }),
        updateCurrentPromotion:builder.mutation({
            query:({promtionData,promotionId})=>{
        
                return{
                    
                    url:`promotion/${promotionId}`,
                    method:"PUT",
                    body:promtionData,
                 }

            },
            invalidatesTags:['updatePromotion']

           
        }),
        getOnePromotion:builder.query({
            query:(promotionId)=>{
                return{
                    // /api/promotion/:title
                    url:`promotion/${promotionId}`
                }
            },
            providesTags:['updatePromotion']

        }),
        deletePromotion:builder.mutation({
            query:(promotionId)=>({
                url:`/promotion/${promotionId}`,
                method:"DELETE",
 
            }),
            invalidatesTags:['updatePromotion']

        }),

        // USERS 
        getAllUsers:builder.query({
            query:()=>{
                return{
                    url:'/users',
 
                }
            }
        }),
        getUserByID:builder.mutation({
            query:(userID)=>{
                // console.log(userID)
               if(userID){
                return{
                    url:`/user/${userID}`,
                 }
               }else{
                return{
                    url:"/user",
                 }
               }
            }
        }),
        updateUser :builder.mutation({
            query:(userData)=>{
                return{
                    url:"/user",
                    method:"PUT",
                    body:userData,
                 }
            }
        }),
        updateUserRole:builder.mutation({
            query:(userData)=>{
                // console.log(userData)
                return{
                    url:"/user-change-role",
                    method:"PUT",
                    body:userData,
 
                }
            }
        }),
        updatePassword : builder.mutation({

            query:(userData)=>{
                return{
                    url:"/user/pass",
                    method:"PUT",
                    body:userData,
                 }
            }
        }),
        foregetPassword:builder.mutation({
            query:(email)=>{
                // console.log(email)
                return{
                    url:'/forget-pass-mail',
                    method:"POST",
                    body:email
                }
            }
        }),
        setNewPassword:builder.mutation({
            query:(pass)=>{
                // console.log(pass)
                return{
                    url:'/forget-pass-change',
                    method:"PATCH",
                    body:{pass:pass.pass},
                    // headers:{"authorization":`Bearer ${pass.token}`},

                }
            }
        }),
        getSearchResults : builder.query({

            query: (arg = ' ') => {
                const { bookTitle ,page ,limit,category,priceMin,priceMax,priceSort ,writer } = arg;
                    // console.log(category)
                    if(category){
                        if(category.length >1){
                            let newCategory = ''
                            for(let i = 0; i < category.length; i++){
                                newCategory += "&category="+category[i]
                            }
                            return {
                                url:`/search?key=${bookTitle}${newCategory}`,
                                params: { page,limit,priceMin,priceMax,priceSort,writer},
                                
                            }
                        }else{

                            return {
                                url:`/search?key=${bookTitle}`,
                                params: { page,limit,category,priceMin,priceMax,priceSort,writer},
                                
                            }
                        }
                    }

                    
                
              },
              providesTags:['search']


        }),

        // cart

        getCart:builder.query({
            
            query:()=>{
                return{
                    url:"/cart",
                    headers:{"authorization":`Bearer ${userToken}`},
                    
                }
            },
            providesTags:['cart']
        },
        
        ),
        addToCart:builder.mutation({
            query:(cartItems)=>{
                const {bookIds,collectionIds} = cartItems
          
                // console.log(cartItems)
                return{
                    url:'/cart-addition',
                    method:'PUT',
                    body:cartItems,
                    headers:{"Authorization":`Bearer ${userToken}`},
                    

                }
            },
            invalidatesTags:['cart']
        }),
        removeFromCart:builder.mutation({
            query:(cartItems)=>{
                    const {bookIds,collectionIds} = cartItems
                
                    return{
                        url:'/cart-removal',
                        method:'PUT',
                        body:cartItems,
                         }
                },
                invalidatesTags:['cart']

        }),
        getWishList : builder.query({
            query:()=>{
                return{
                    url:"/wish-list",
                    headers:{"authorization":`Bearer ${userToken}`},
                    
                }
            },
            providesTags:['wishlist']
        }),
        addToWishList : builder.mutation({
            query:(cartItems)=>{
                const {bookIds,collectionIds} = cartItems
          
                // console.log(cartItems)
                return{
                    url:'/wish-addition',
                    method:'PUT',
                    body:cartItems,
                    headers:{"Authorization":`Bearer ${userToken}`},
                    

                }
            },
            invalidatesTags:['wishlist']
        }),
        removeFromWishList:builder.mutation({
            query:(cartItems)=>{
                const {bookIds,collectionIds} = cartItems
                
                // console.log(bookIds)
                return{
                    url:'/wish-removal',
                    method:'PUT',
                    body:cartItems,
                 }
            },
            invalidatesTags:['wishlist']
        }),
        
        // Check Out 
        checkout:builder.mutation({
            query:()=>{
                return{
                    url:"/check-out",
                    headers:{"authorization":`Bearer ${userToken}`},
                    method:"GET"
                }
            },

        }),

        // orders
        getAllOrders:builder.query({
            query:()=>{
                return {
                    url:'/orders',
 
                }
            }
        }),
        getOrdersCount:builder.query({
            query:()=>{
                return {
                    url:'/orders-count',
 
                }
            }
        }),
        addOrder:builder.mutation({
            query:(cartItems)=>{
                
                return{
                    url:'/order',
                    method:'POST',
                    body:cartItems,
                 }
            },
        }),
        // REVIEWS
        addNewReview:builder.mutation({
            query:(review)=>{
                console.log(review)
                return{
                    url:"/review",
                    method:"POST",
                    body:review
                }
            },
            invalidatesTags:['updateReviews']
        }),
        getBookReviews:builder.query({
            query:(bookId)=>{
                return{
                    url:"/book-reviews/"+bookId,
                }
            },
            providesTags:['updateReviews']
        }),
        deleteReview:builder.mutation({
            query:(reviewID)=>{
                return{
                    url:"/review/"+reviewID,
                    method:"DELETE",
                    
                }
            },
            invalidatesTags:['updateReviews']

        })


    })  
    
})

export const selectCartItems = (state)=>booksApi.endpoints.getCart.select('getCart').data
// export const {useGetBooksAPi} = booksApi