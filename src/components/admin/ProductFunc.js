import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Button, Col,
    Form,
    FormGroup,
    Input,
    Label, Row,
} from 'reactstrap';
import {
    addProduct,
    resetProductUpdate, 
    toggleFormAddProduct, 
    updateProduct,
} from '../../actions';
import callApi from '../../utils/apiCaller';

const ProductFunc = ({ categories }) => {
    const productEditting = useSelector((state) => state.productEditting);
    const [inputValue, setInputValue] = useState({
        _id: '',
        name: '',
        des: '',
        price: '',
        author: '',
        category: 'Children Literature',
        urlImg: '',
    });
    const [error, setError] = useState({
        name: '',
        des: '',
        price: '',
        author: '',
        category: '',
        urlImg: '',
    });
    const [errorCallApi, setErrorCallApi] = useState('');
    const dispatch = useDispatch();
    const notifyAdd = () => toast.success('Add Product Success!');
    const notifyUpdate = () => toast.success('Update Product Success!');

    useEffect(() => {
        if (Object.keys(productEditting).length !== 0) {
            setInputValue({
                ...inputValue,
                _id: productEditting._id,
                name: productEditting.name,
                des: productEditting.des,
                price: productEditting.price,
                author: productEditting.author,
                category: productEditting.category,
                urlImg: productEditting.img,
            });
        }

        return function resetInputValue() {
            dispatch(resetProductUpdate());
            setInputValue({
                name: '',
                des: '',
                price: '',
                author: '',
                category: 'Children Literature',
                urlImg: '',
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productEditting]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleChangeImg = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append(
            'image',
            file,
            file.name,
        );
        callApi('api/upload/post', 'POST', formData).then((res) => {
            const newUrl = res.data.url_img;
            setInputValue({
                ...inputValue,
                urlImg: newUrl,
            });
        }).catch((error) => {
            setErrorCallApi(error.response.data.message);
        });
    }; 

    const validateFn = (input = '', info = '') => {
        if (!input) {
            return `The ${info} field is required.`;
        }
        if (info !== 'price' && info !== 'category') {
            if (input.length < 6) {
                return `${info.charAt(0).toUpperCase() + info.slice(1)} must be at least 5 characters.`;
            }
        }

        return '';
    };

    const validate = (name, des, price, author, category, urlImg) => {
        const nameErr = validateFn(name, 'name') || '';
        const priceErr = validateFn(price, 'price') || '';
        const desErr = validateFn(des, 'des') || '';
        const categoryErr = validateFn(category, 'category') || '';
        const authorErr = validateFn(author, 'author') || '';
        const urlImgErr = validateFn(urlImg, 'Image') || '';
        if (nameErr || priceErr || desErr || categoryErr || authorErr || urlImgErr) {
            setError({
                ...error,
                name: nameErr,
                des: desErr,
                price: priceErr,
                category: categoryErr,
                author: authorErr,
                urlImg: urlImgErr,
            });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { 
            _id,
            name, 
            des, 
            price, 
            author, 
            category,
            urlImg,
        } = inputValue;
        const isValidate = validate(name, des, price, author, category, urlImg);
        if (isValidate) {
            if (!_id) { // add product
                const product = {
                    name,
                    des,
                    price,
                    author,
                    category,
                    img: urlImg,
                };
                dispatch(addProduct(product));
                dispatch(toggleFormAddProduct());
                notifyAdd();
            } else { // update product
                const product = {
                    _id,
                    name,
                    des,
                    price,
                    author,
                    category,
                    img: urlImg,
                };
                dispatch(updateProduct(product));
                dispatch(toggleFormAddProduct());
                notifyUpdate();
            }
        }
    };

    const showOption = (categories) => {
        const result = categories.map((category) => {
            return <option key={category._id} value={category.name}>{category.name}</option>;
        });
        return result;
    };

    return (
        <div className="form-product d-flex flex-column justify-content-between">
            <div className="form-product__header d-flex justify-content-between px-4 py-5">
                <h3 className="form-product__header-title">
                    {inputValue._id ? 'Update Product' : 'Add Product'}
                </h3>
                <FontAwesomeIcon icon={faTimes} onClick={() => dispatch(toggleFormAddProduct())} />
            </div>
            <div className="text-danger"></div>
            {errorCallApi && <div className="text-danger">{errorCallApi}</div>}
            <div className="form-product__body">
                <Form onSubmit={handleSubmit}>
                    <Row className="upload-img-wrap mb-5">
                        <Col xl="4" className="pt-4">
                            <span className="title px-4">Upload your Product image here</span>
                        </Col>
                        <Col xl="8" className="upload-img px-4 py-5 d-flex justify-content-center">
                            <FormGroup className="w-100">
                                <Input
                                    className="d-none"
                                    id="file"
                                    type="file"
                                    accept="image/*"
                                    name="fileImg"
                                    onChange={handleChangeImg}
                                />
                                <Label for="file" className="d-flex flex-column align-items-center px-5 py-4">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                                    <span>
                                        <span>Drag/Upload </span>
                                        your image here.
                                    </span>
                                </Label>
                                {
                                    inputValue.urlImg 
                                    &&  <div className="img-wrapper mt-4">
                                            <img className="w-100 h-100" src={inputValue.urlImg} alt="book" />
                                        </div>
                                }
                                {error.urlImg && <div className="text-danger">{error.urlImg}</div>}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="info-product">
                        <Col xl="4" className="pt-4">
                            <div className="title w-100 ms-4">
                                Add your Product description and necessary information from here
                            </div>
                        </Col>
                        <Col className="info-product-content p-4">
                            <FormGroup className="mb-3">
                                <Label className="mb-2" for="name">
                                    Name
                                    <span className="ms-1 text-danger">*</span>
                                </Label>
                                <Input
                                    autoComplete="off"
                                    className="product-form-control py-2"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={inputValue.name}
                                    onChange={handleChange}
                                />
                                {error.name && <div className="text-danger">{error.name}</div>}
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-2" for="des">
                                    Description
                                    <span className="ms-1 text-danger">*</span>
                                </Label>
                                <textarea
                                    className="product-form-control w-100 py-2"
                                    id="des"
                                    type="text"
                                    name="des"
                                    autoComplete="off"
                                    value={inputValue.des}
                                    onChange={handleChange}
                                />
                                {error.des && <div className="text-danger">{error.des}</div>}
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-2" for="price">
                                    Price
                                    <span className="ms-1 text-danger">*</span>
                                </Label>
                                <Input
                                    autoComplete="off"
                                    className="product-form-control py-2"
                                    id="peice"
                                    type="number"
                                    name="price"
                                    value={inputValue.price}
                                    onChange={handleChange}
                                />
                                {error.price && <div className="text-danger">{error.price}</div>}
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-2" for="author">
                                    Author
                                    <span className="ms-1 text-danger">*</span>
                                </Label>
                                <Input
                                    autoComplete="off"
                                    className="product-form-control py-2"
                                    id="author"
                                    type="text"
                                    name="author"
                                    value={inputValue.author}
                                    onChange={handleChange}
                                />
                                {error.author && <div className="text-danger">{error.author}</div>}
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-2" for="category">
                                    Category
                                    <span className="ms-1 text-danger">*</span>
                                </Label>
                                <Input
                                    autoComplete="off"
                                    className="product-form-control py-2"
                                    id="category"
                                    type="select"
                                    name="category"
                                    value={inputValue.category}
                                    onChange={handleChange}
                                >
                                    {showOption(categories)}
                                </Input>
                                {error.category && <div className="text-danger">{error.category}</div>}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="btn-wrap mt-3 p-4 flex-nowrap">
                        <Col className="p-0 btn-cancel col-md-6 me-3">
                            <Button className="w-100 py-3" onClick={() => dispatch(toggleFormAddProduct())}>
                                Cancel
                            </Button>
                        </Col>
                        <Col className="p-0 btn-submit col-md-6">
                            <Button className="w-100 py-3" type="submit">
                                {inputValue._id ? 'Update Product' : 'Create Product'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default ProductFunc;
