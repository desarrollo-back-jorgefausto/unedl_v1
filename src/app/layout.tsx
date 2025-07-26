
import "../styles/index.scss";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (		
		<html lang="es">
			<head>
			    <link rel="icon" href="https://www.unedl.edu.mx/portal/assets/img/favicon.png" type="image/png" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    			<meta name="author" content="Unedl - Universidad Enrique D&iacute;az de Le&oacute;n" />
    			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<title>Universidad de Enrique D&iacute;az de Le&oacute;n</title>
			</head>
			<body>
				{children}
			</body>			
		</html>		
	);
}
