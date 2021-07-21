import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button } from 'reactstrap';
import { removeProduct } from '../../actions';

const BtnDelete = ({ product }) => {
    const dispatch = useDispatch();

    const notify = () => toast.success('Delete Product Success');

    const handleClick = (id) => {
        dispatch(removeProduct(id));
        notify();
    };

    return (
        <div className="btn-wrap">
            <Button className="btn-delete d-flex align-items-center" onClick={() => handleClick(product._id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
                <span className="ms-2">Delete</span>
            </Button>
        </div>
    );
};

export default BtnDelete;
