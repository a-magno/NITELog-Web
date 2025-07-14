import { useState } from "react"
import QRCode from "react-qr-code"

const QRCodeRead = () => {
    const [token] = useState<number>()

    return(
        <div className="flex-col">
            <QRCode value={token?.toString() || ''}/>
            <div>
            <span className="alert">Escaneie o QR Code acima para marcar presença </span>
            </div>
        </div>
    )
}

export default QRCodeRead