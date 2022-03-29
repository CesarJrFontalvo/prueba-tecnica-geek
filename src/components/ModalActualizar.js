import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editarProductoAsync } from '../actions/actionReseta'

const ModalActualizar = (datosModal) => {
    const [show, setshow] = useState(true)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            product: datosModal.datosModal.product,
            marca: datosModal.datosModal.marca,
            quantity: datosModal.datosModal.quantity,
            price: datosModal.datosModal.price,
        },
        onSubmit: (data) => {
            dispatch(editarProductoAsync(data))
        }
    })

    useEffect(() => {
    }, [datosModal])

    const closeModal = () => {
        setshow(false)
    }
    return (
        <div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Actualizar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formik.handleSubmit}>

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="product"
                            autoComplete="off"
                            value={formik.values.product}
                            onChange={formik.handleChange}
                            required />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="marca"
                            autoComplete="off"
                            value={formik.values.marca}
                            onChange={formik.handleChange}
                             />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="quantity"
                            autoComplete="off"
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                             />

                        <input
                            type="text"
                            className="form-control mt-2"
                            name="price"
                            autoComplete="off"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                             />

                        <Modal.Footer>
                            <Button
                                variant="danger"
                                onClick={closeModal}>Cerrar</Button>
                            <Button variant="primary"
                            onClick={closeModal}
                                type="submit">Actualizar</Button>
                        </Modal.Footer>
                    </form>

                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ModalActualizar