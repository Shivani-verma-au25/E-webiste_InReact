import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const productContext = createContext(null)

    // custom hook 
export const useProductContext = () => useContext(productContext)

const ProductProvider = ({children}) =>{
    const [allProduct ,setAllProduct] = useState([])
    const [isloading , setIsLoading] = useState(false)
    const [cartItem , setCartItem] = useState([])
    const [wishListItems ,setWishListItems] = useState([])
    const [heartAdd , setHartAdd] = useState(false)
    const navigate = useNavigate()


// getting all products
    const getAllProduct = async() => {
            setIsLoading(true)
        try {
            const response = await axios.get('https://dummyjson.com/products')
            const rawData = response.data
            // console.log(rawData);
            if (rawData) return setAllProduct(rawData)
            
        } catch (error) {
            console.log("error from context" , error);   
        } 
    }

    // WishList Add fucntionality
    const addWishToList  = async(getWishListItem) => {
        let existWishListItem = [...wishListItems]
        // console.log("item" , existWishListItem);
        
        let currentWishListItemIndex = existWishListItem?.findIndex((wishlist) => wishlist.id === getWishListItem.id)
        // console.log("current" , currentWishListItemIndex);
        

        if(currentWishListItemIndex === -1) {
            existWishListItem.push({
                ...getWishListItem
            })
            setHartAdd(true)
            toast.success("Item is added to your Wishlist")
        }else{
             // Item is in wishlist, remove it
            existWishListItem.splice(currentWishListItemIndex, 1);
            setHartAdd(false);  // Set heart to default
            toast.error('Item removed from wishlist')
        }        

        setWishListItems(existWishListItem)
        localStorage.setItem('wishList' , JSON.stringify(existWishListItem))
    }
    
    // add To cart Functnality
    const AddTocartITem = (getItem) =>{
        let existCartItem = [...cartItem]
        let currentCartItemIndex = existCartItem?.findIndex((itemIdex) => itemIdex.id === getItem.id)

        console.log(currentCartItemIndex);
        if (currentCartItemIndex === -1) {
            existCartItem.push({
                ...getItem ,
                quantity : 1,
                TotalPrice : getItem?.price
            })
        }else{
            // console.log("Alredy added !");
            
            
            existCartItem[currentCartItemIndex] = {
                ...existCartItem[currentCartItemIndex] ,
                quantity : existCartItem[currentCartItemIndex].quantity + 1,
                TotalPrice : (existCartItem[currentCartItemIndex].quantity + 1 ) * existCartItem[currentCartItemIndex].price
            }
        }

        setCartItem(existCartItem)
        localStorage.setItem("cartItem" , JSON.stringify(existCartItem))
        // navigate('/cart')
        toast.success('Product is added To Cart ')
        
        
    }

    // RemoveItem functionality
    const removeProductFromCart = (product,isRemove) => {
        console.log(product,"pr");
        
        const copyExistIemFromCart = [...cartItem]

        const currentCopyCartIndex = copyExistIemFromCart.findIndex((item) => item.id === product.id )

        if(isRemove) {
            copyExistIemFromCart.splice(currentCopyCartIndex , 1)
        }else {
            copyExistIemFromCart[currentCopyCartIndex] = {
                ...copyExistIemFromCart[currentCopyCartIndex],
                quantity : copyExistIemFromCart[currentCopyCartIndex].quantity - 1,
                TotalPrice : (copyExistIemFromCart[currentCopyCartIndex].quantity - 1) * copyExistIemFromCart[currentCopyCartIndex].price
            }
        }

        localStorage.setItem('cartItem' , JSON.stringify(copyExistIemFromCart))
        setCartItem(copyExistIemFromCart)
        

    }

    useEffect(() => {
        getAllProduct()
        setCartItem(JSON.parse(localStorage.getItem("cartItem")) || [])
        setWishListItems(JSON.parse(localStorage.getItem("wishList")) || [])
    } ,[])


    // console.log(wishListItems, "all Product");
        

    return <productContext.Provider value={{allProduct ,isloading ,AddTocartITem ,cartItem,addWishToList , wishListItems ,heartAdd,removeProductFromCart}} >{children}</productContext.Provider>
}

export default ProductProvider