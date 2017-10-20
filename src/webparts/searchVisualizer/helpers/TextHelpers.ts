// The template provide the property which will be returned
export default function getFileNameFromPath(path) {
    if (path == null)
        return null;

    let pathString: string = path;
	let filename: string = pathString.substring(path.lastIndexOf('/')+1);
    return filename;
};

 