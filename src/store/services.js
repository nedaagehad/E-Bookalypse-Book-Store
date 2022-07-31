import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath:'booksApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://e-bookalypse.herokuapp.com/api/"}),
    endpoints:(builder)=>({
        getAllBooks : builder.query({
            query:()=>'books'
        })
    })
})


// export const {useGetBooksAPi} = booksApi