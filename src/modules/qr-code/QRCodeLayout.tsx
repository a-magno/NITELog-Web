import { Outlet } from "react-router"
import '@styles/qrcode.css'
import type { PropsWithChildren } from "react"

const QRCodeLayout = ({children}: PropsWithChildren) => {
    return(
        <main id="qr-code">
            <div>
            <h1 className="tituloQR">QR Code</h1>
            </div>
            {children || <Outlet />}
        </main>
    )
}

export default QRCodeLayout