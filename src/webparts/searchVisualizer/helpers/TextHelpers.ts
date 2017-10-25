// The template provide the property which will be returned
export function getFileNameFromPath(path) {
    if (path == null)
        return null;

    let pathString: string = path;
	let filename: string = pathString.substring(path.lastIndexOf('/')+1);
    return filename;
}

 // The template provide the property which will be returned
export function getClientNameFromUrl(url) {
    if (url == null)
        return null;

    let urlString: string = url;
    let clientName: string = urlString.substring(url.lastIndexOf('/')+3);
    let clientNameUpperCase:string = clientName[0].toUpperCase() + clientName.substring(1);
    return clientNameUpperCase;
}


 