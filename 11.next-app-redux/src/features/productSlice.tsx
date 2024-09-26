"use client";
import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
// import ClearLocalStorage from "@/components/Extend/ClearLocalStorage";
import { RootState } from "@/store/hooks";
import { ProductModel } from "@/models/ProductModel";


const header = {
	headers: {
		'Content-Type': 'multipart/form-data',
		Accept: 'application/json',
	},
};


export const getProductList = createAsyncThunk(
	"product/getProduct",
	async () =>
		await axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/`)
			.then(function (response) {
				return response.data.data;
			})
			.catch(function (error) {
			}),
);

export const createProduct = createAsyncThunk(
	"product/createProduct",
	async (formData: any, { rejectWithValue }) =>
		
		await axios
			.post(`${process.env.NEXT_PUBLIC_BASE_URL}/product/create`, formData, header)
			.then(function (response) {
				return response.data.data;
			})
			.catch(function (error) {
				console.log(error.response.data.Errors)
				return rejectWithValue(error.response.data.Errors);
			}),
);

export const updateProduct = createAsyncThunk(
	"product/updateProduct",
	async ({ id, formData }: { formData: any, id: any }, { rejectWithValue }) =>
		await axios
			.put(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}/edit`, formData, header)
			.then(function (response) {		
				return response.data.data;
			})
			.catch(function (error) {
				// if (error.response.data.message=='Unauthorized') {
				// 	ClearLocalStorage()
				// }

				console.log(error.response.data.Errors)
				return rejectWithValue(error.response.data.Errors);
			}),
);

export const deleteProduct = createAsyncThunk(
	"product/deleteProduct",
	async (id: any, { rejectWithValue }) =>
		await axios
			.delete(`http://127.0.0.1:8080/api/product/${id}`)
			.then(function (response) {
				return id;
			})
			.catch(function (error) {
				// if (error.response.data.message=='Unauthorized') {
				// 	ClearLocalStorage()
				// }
				return rejectWithValue(error.response.data.message);
			}),
);

const productAdapter = createEntityAdapter({
	// Assume IDs are stored in a field other than `book.id`
	selectId:(product:ProductModel) => product.id,
	// Keep the "all IDs" array sorted based on book titles
	// sortComparer: (a, b) => a.nama_alter.localeCompare(b.nama_poli),
});

export const productSlice = createSlice({
	name: "product",
	initialState: productAdapter.getInitialState({
		isPending: false,
		isSuccess: false,
		isError: false,
		dataError: [],
	}),
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getProductList.pending, (state, action) => {
			(state.isPending = true),
				(state.isSuccess = false),
				(state.isError = false);
		});
		builder.addCase(getProductList.fulfilled, (state, action) => {
			(state.isPending = false),
				(state.isSuccess = true),
				(state.isError = false),
				productAdapter.setAll(state, action.payload);
		});
		builder.addCase(getProductList.rejected, (state, action) => {
			(state.isPending = false),
				(state.isSuccess = true),
				(state.isError = false);
		});

		// create
		builder.addCase(createProduct.pending, (state, action: any) => {
			(state.isPending = true),
				(state.isSuccess = false),
				(state.isError = false);
			(state.dataError = []);
		});
		builder.addCase(createProduct.fulfilled, (state, action: any) => {
			(state.isPending = false),
				(state.isSuccess = true),
				(state.isError = false),
				productAdapter.addOne(state, action.payload);
			(state.dataError = []);
		});
		builder.addCase(createProduct.rejected, (state, action: any) => {
			(state.isPending = false),
				(state.isSuccess = false),
				(state.isError = true),
				(state.dataError = action.payload);
		});

		// update
		builder.addCase(updateProduct.pending, (state, action: any) => {
			(state.isPending = true),
				(state.isSuccess = false),
				(state.isError = false);
			(state.dataError = []);
		});
		builder.addCase(updateProduct.fulfilled, (state, action: any) => {
			(state.isPending = false),
				(state.isSuccess = true),
				(state.isError = false),
				productAdapter.updateOne(state, { id: action.payload.id, changes: action.payload });
			(state.dataError = []);
		});
		builder.addCase(updateProduct.rejected, (state, action: any) => {
			(state.isPending = false),
				(state.isSuccess = false),
				(state.isError = true),
				(state.dataError = action.payload);
		});

		//delete
		builder.addCase(deleteProduct.pending, (state, action) => {
			(state.isPending = true),
				(state.isSuccess = false),
				(state.isError = false);
		});
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			(state.isPending = false),
				(state.isSuccess = true),
				(state.isError = false);
			productAdapter.removeOne(state, action.payload);
		});
		builder.addCase(deleteProduct.rejected, (state, action) => {
			(state.isPending = false),
				(state.isSuccess = false),
				(state.isError = true);
		});
	},
});

export const productSelectors = productAdapter.getSelectors<RootState>(
	(state) => state.product,
);

export default productSlice.reducer;
