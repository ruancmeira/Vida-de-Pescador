export default {
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRETKEY || '5b834f4c-1dfc-4e30-934d-cd61f43e2ca1',
    publicRoutes: process.env.PUBLICROUTES || 
    [
        'users',
        'auth'
    ]    
}