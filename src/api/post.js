import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from './index.js'

export const postApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getPostById: builder.query({
            query: (id) => '/posts/${id}'
        }),
        getFood: builder.query({
            queryFn: async () => {
                const data = await supabase.from("restaurants") .select('*')
                return { data: data }
            }
        }), 
        getMeal: builder.query({
            queryFn: async () => {
                const data = await supabase.from("food") .select('*')
                return { data: data }
            }
        }), 
        getCategories: builder.query({
            queryFn: async () => {
                const data = await supabase.from("categories") .select('*')
                return { data: data }
            }
        }),   
        createOrder: builder.mutation({
            query: ({ body }) => ({
                url: '/posts',
                method: 'POST',
                body,
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery, useGetFoodQuery, useGetMealQuery, useGetCategoriesQuery, useCreateOrderMutation  } = postApi;
