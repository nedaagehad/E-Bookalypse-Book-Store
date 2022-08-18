import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userToken = localStorage.getItem('userToken');

export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: "https://e-bookalypse.herokuapp.com/" }),

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userData) => ({
                url: "/login",
                method: 'POST',
                body: userData,
            })
        })
    })
})

export const booksApi = createApi({

    reducerPath: 'booksApi',

    baseQuery: fetchBaseQuery({ baseUrl: "https://e-bookalypse.herokuapp.com/" }),

    tagTypes: ['cart', 'wishlist'],

    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: (arg = ' ') => {
                const { page, limit, category, priceMin, priceMax, priceSort, writer } = arg;

                let newCategory = '';

                if (category) {
                    if (category.length > 1) {
                        for (let i = 0; i < category.length; i++) {
                            newCategory += "&category=" + category[i]
                        }
                    } else if (category.length == 1) {
                        newCategory = "category=" + category[0]
                    }
                }

                if (newCategory == " ") {
                    return {
                        url: `books`,
                        params: { page, limit, priceMin, priceMax, priceSort, writer },
                    };
                } else {

                    return {
                        url: `books/?${newCategory}`,
                        params: { page, limit, priceMin, priceMax, priceSort, writer },
                    };
                }
            },
        }),

        getBookById: builder.query({
            query: (bookID) => {
                return {
                    url: `/book/${bookID}`,
                }
            }
        }),
        addNewBook: builder.mutation({
            query: (bookData) => ({
                url: "/book",
                method: 'POST',
                body: bookData,
                headers: { "authorization": `Bearer ${userToken}` }
            })
        }),
        updateNewBook: builder.mutation({
            query: ({ bookNewData, bookid }) => {
                return {
                    url: `/book/${bookid}`,
                    method: "PUT",
                    body: bookNewData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        deleteBook: builder.mutation({
            query: ({ bookId, bookOldFiles }) => {
                const { icon, src } = bookOldFiles
                return {
                    url: `/book/${bookId}`,
                    method: "DELETE",
                    params: { icon, src },
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        // Writers 
        getAllWriters: builder.query({
            query: (args = '') => {
                const { page, limit } = args;
                return {
                    url: "writers",
                    params: { page },
                }
            }
        }),
        getWriterById: builder.query({
            query: (writerId) => {
                return {
                    url: `writer/${writerId}`,
                }
            }
        }),
        addNewWriter: builder.mutation({
            query: (writerData) => ({
                url: "/admin/writer",
                method: "POST",
                body: writerData,
                headers: { "authorization": `Bearer ${userToken}` }
            })
        }),
        updateWriter: builder.mutation({
            query: ({ writerNewData, writerId }) => {
                return {
                    url: `/writer/${writerId}`,
                    method: "PUT",
                    body: writerNewData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        deleteNewWriter: builder.mutation({
            query: ({ writerId, icon }) => {
                return {
                    url: `/writer/${writerId}`,
                    method: "DELETE",
                    params: { icon },
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        // Categories
        getAllCategories: builder.query({
            query: (args = '') => {
                return {
                    url: "categories",
                }
            }
        }),
        getCategoryById: builder.query({
            query: (categoryId) => {
                return {
                    url: `categorie/${categoryId}`,
                }
            }
        }),
        addNewCategory: builder.mutation({

            query: (categoryData) => (
                {
                    url: "/categorie",
                    method: "POST",
                    body: categoryData,
                    headers: { "authorization": `Bearer ${userToken}` }
                })
        }),
        updateCategory: builder.mutation({
            query: ({ categoryNewData, categoryId }) => {
                return {
                    url: `categorie/${categoryId}`,
                    method: "PUT",
                    body: categoryNewData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        deleteCategory: builder.mutation({
            query: ({ categoryId, icon }) => {

                return {
                    url: `/categorie/${categoryId}`,
                    method: "DELETE",
                    params: { icon },
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),

        // LOGS
        getAllLogs: builder.query({
            query: (args = '') => {
                const { date } = args
                return {
                    url: `/admin/logs/${date}`,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        // Collections 
        getAllCollections: builder.query({
            query: () => {
                return {
                    url: "collections"
                }
            }
        }),
        // Promotions
        getAllPromotions: builder.query({
            query: () => {
                return {
                    url: "promotions"
                }
            }
        }),
        addNewPromotion: builder.mutation({
            query: (promtionData) => (
                {
                    url: "/admin/promotion",
                    method: "POST",
                    body: promtionData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            )

        }),
        updateCurrentPromotion: builder.mutation({
            query: ({ promtionData, promotionId }) => {

                return {
                    url: `admin/promotion/${promotionId}`,
                    method: "PUT",
                    body: promtionData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        getOnePromotion: builder.query({
            query: (promotionId) => {
                return {
                    url: `promotion/${promotionId}`
                }
            }
        }),
        deletePromotion: builder.mutation({
            query: (promotionId) => ({
                url: `/admin/promotion/${promotionId}`,
                method: "DELETE",
                headers: { "authorization": `Bearer ${userToken}` }
            })
        }),

        // USERS 
        getUserByID: builder.mutation({
            query: () => {
                return {
                    url: "/user",
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        updateUser: builder.mutation({
            query: (userData) => {
                return {
                    url: "/user",
                    method: "PUT",
                    body: userData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        updatePassword: builder.mutation({

            query: (userData) => {
                return {
                    url: "/user/pass",
                    method: "PUT",
                    body: userData,
                    headers: { "authorization": `Bearer ${userToken}` }
                }
            }
        }),
        getSearchResults: builder.query({

            query: (arg = ' ') => {
                const { bookTitle, page, limit, category, priceMin, priceMax, priceSort, writer } = arg;
                if (category) {
                    if (category.length > 1) {
                        let newCategory = ''
                        for (let i = 0; i < category.length; i++) {
                            newCategory += "&category=" + category[i]
                        }
                        return {
                            url: `/search?key=${bookTitle}${newCategory}`,
                            params: { page, limit, priceMin, priceMax, priceSort, writer },
                        }
                    } else {

                        return {
                            url: `/search?key=${bookTitle}`,
                            params: { page, limit, category, priceMin, priceMax, priceSort, writer },
                        }
                    }
                }
            },

        }),

        // cart
        getCart: builder.query({

            query: () => {
                return {
                    url: "/cart",
                    headers: { "authorization": `Bearer ${userToken}` },
                }
            },
            providesTags: ['cart']
        },

        ),
        addToCart: builder.mutation({
            query: (cartItems) => {
                // const {bookIds,collectionIds} = cartItems
                return {
                    url: '/cart-addition',
                    method: 'PUT',
                    body: cartItems,
                    headers: { "Authorization": `Bearer ${userToken}` },
                }
            },
            invalidatesTags: ['cart']
        }),
        removeFromCart: builder.mutation({
            query: (cartItems) => {
                const { bookIds, collectionIds } = cartItems
                return {
                    url: '/cart-removal',
                    method: 'PUT',
                    body: { bookIds: [bookIds], collectionIds: [collectionIds] },
                    headers: { "Authorization": `Bearer ${userToken}` }
                }
            },
            invalidatesTags: ['cart']

        }),
        getWishList: builder.query({
            query: () => {
                return {
                    url: "/wish-list",
                    headers: { "authorization": `Bearer ${userToken}` },

                }
            },
            providesTags: ['wishlist']
        }),
        addToWishList: builder.mutation({
            query: (cartItems) => {
                // const {bookIds,collectionIds} = cartItems
                return {
                    url: '/wish-addition',
                    method: 'PUT',
                    body: cartItems,
                    headers: { "Authorization": `Bearer ${userToken}` },


                }
            },
            invalidatesTags: ['wishlist']
        }),
        removeFromWishList: builder.mutation({
            query: (cartItems) => {
                const { bookIds, collectionIds } = cartItems

                return {
                    url: '/wish-removal',
                    method: 'PUT',
                    body: { bookIds: [bookIds], collectionIds: [collectionIds] },
                    headers: { "Authorization": `Bearer ${userToken}` }
                }
            },
            invalidatesTags: ['wishlist']
        })
    })

})

export const selectCartItems = (state) => booksApi.endpoints.getCart.select('getCart').data