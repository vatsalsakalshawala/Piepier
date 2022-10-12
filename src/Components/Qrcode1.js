import QRCode from 'qrcode'
import { useState } from 'react'
import "./Qrcode.css"

function Qrcode() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 200,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="qrcode">
			<h1>QR Generator</h1>
			<input className="urlbox" type="text" placeholder="e.g. https://google.com" value={url} 
			onChange={e => setUrl(e.target.value)}  />
			<button className="generate btn btn-success mx-1.5 " onClick={GenerateQRCode}>Generate</button>
			<br/>
			<br/>
			{qr && <>
				<img src={qr} />
				{/* <br></br>
				<br></br> */}
				{/* <a href={qr} download="qrcode.png">Download</a> */}
				<a href={qr} className="btn btn-success mx-1.5" download="qrcode.png"> Download</a>
			</>}
		</div>
	)
}

export default Qrcode