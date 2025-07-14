import { useEffect, useState } from "react"
import QRCode from "react-qr-code"

const QRCodeCreate = () => {
    const [token, setToken] = useState<number>()
    
    const handleClick = () => {
        if (token) {
            const n = Math.random() * 8
            setToken(n);
        }
    }
    
    useEffect(() => {
        handleClick()
    }, [])

    return(
        <div className='flex-col'>
            <QRCode value={token?.toString() || ''}/>
            <button 
                onClick={handleClick}>
                Gerar Token
            </button>
            <div>
            <span className="spanQR">Escaneie o QR Code acima para marcar presença </span>
            </div>
        </div>
    )
}

export default QRCodeCreate