import axios from "axios";
import { useCallback } from "react";

export const getProduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
        useCallback(res.data);
    }).catch((err) => {
        console.log(err);
    });
}