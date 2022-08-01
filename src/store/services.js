import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath:'booksApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://e-bookalypse.herokuapp.com/api/"}),
    endpoints:(builder)=>({
        getAllBooks : builder.query({
            // query:(args)=>({
            //     url:"books",
                
            // }),
            query: (arg = ' ') => {
                const { page ,limit,category,priceMin,priceMax,priceSort  } = arg;
                console.log('arg: ', arg);
                return {
                  url: 'books',
                  params: { page,limit,category,priceMin,priceMax,priceSort },
                };
              },
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
        })
    })
})


// export const {useGetBooksAPi} = booksApi