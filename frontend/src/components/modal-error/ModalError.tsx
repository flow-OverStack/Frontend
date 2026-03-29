import { useDispatch, useSelector } from 'react-redux'
import { PropsStore } from '../../store/store'
import CloseIcon from '../../assets/close-icon.svg'
import './ModalError.css'
import { setError } from '../../slices/errorSlice'

const ModalError = () => {
    let errorMessage = useSelector((state: PropsStore) => state.error)
    const dispatch = useDispatch()

    const handleClose = () => {
        if (errorMessage.length > 0) {
            dispatch(setError(''))
        }
    }
    return (
        <div className="modal-error" style={errorMessage.length > 0 ? { display: 'flex' } : { display: 'none' }}>
            <button className="modal-error__close" onClick={handleClose} ><CloseIcon className='modal-error__close-icon' /></button>
            <span className="modal-error__text">{errorMessage.length > 0 ? errorMessage : ''}</span>
        </div>
    )
}

export default ModalError