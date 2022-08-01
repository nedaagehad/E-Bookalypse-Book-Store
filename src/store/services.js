import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath:'booksApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://e-bookalypse.herokuapp.com/api/"}),
    endpoints:(builder)=>({
        getAllBooks : builder.query({
            query: (arg = ' ') => {
                const { page ,limit,category,priceMin,priceMax,priceSort  } = arg;
                console.log('arg: ', arg);
                return {
                  url: 'books',
                  params: { page,limit,category,priceMin,priceMax,priceSort },
                };
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
                
                
            })
        }),
        updateNewBook:builder.mutation({
            query:({bookNewData,bookid})=>{
                // console.log(bookid)
                return{
                    url:`admin/books/${bookid}`,
                    method:"PUT",
                    body: bookNewData
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
                    params:{icon,src}
                    
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
                    body:writerData
                
            })
        }),
        updateWriter : builder.mutation({
            query:({writerNewData,writerId})=>{
                // console.log(bookid)
                return{
                    url:`admin/writer/${writerId}`,
                    method:"PUT",
                    body: writerNewData
                }
            }
        }),
        deleteNewWriter:builder.mutation({
            query:({writerId,icon})=>{
            
                return{
                    url:`/admin/writer/${writerId}`,
                    method:"DELETE",
                    params:{icon}
                }
            }
        }),
        // Categories
        getAllCategories:builder.query({
            query:(args='')=>{
                // const { page ,limit} = args;
                // console.log(page)
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
            query:(categoryData)=>({
                url:"/admin/categorie",
                method:"POST",
                body:categoryData
            
            })
        }),
        updateCategory:builder.mutation({
            query:({categoryNewData,categoryId})=>{
                console.log(categoryNewData)
                console.log(categoryId)
                return{
                    url:`admin/categorie/${categoryId}`,
                    method:"PUT",
                    body: categoryNewData
                }
            }
        }),
        deleteCategory:builder.mutation({
            query:({categoryId,icon})=>{
            
                return{
                    url:`/admin/categorie/${categoryId}`,
                    method:"DELETE",
                    params:{icon}
                }
            }
        }),
    })
})


// export const {useGetBooksAPi} = booksApi