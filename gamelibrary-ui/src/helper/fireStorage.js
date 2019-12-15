import firebase from 'firebase';

export const UploadFile = async (image, imageName, gameName) => {    
    const response = await fetch(image);
    const file = await response.blob();

    const extension = 'jpg';
    const folder = 'image'
    const path = `${folder}/${gameName}.${extension}`;

    const storage  = firebase.storage();
    const storageRef = storage.ref(path);

    return new Promise(async (res, rej) => {
        storageRef.put(file).on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
            console.log("progress: " + (snapshot.bytesTransferred)/snapshot.totalBytes * 100);
            
            if(snapshot.state === firebase.storage.TaskEvent.SUCCESS)
                console.log("upload successful");
                
        }, error => {
            rej(error)
        },
        async ()  => {
            const url = storageRef.getDownloadURL();
            res(url);
        })
    });
}

export const DeleteFile = async (imageName) => {    
    const folder = 'image'
    const path = `${folder}/${imageName}.jpg`;
    const storageRef  = firebase.storage().ref();
    const gameRef = storageRef.child(path);

    gameRef.delete()
    .then(() => console.log(`Image with name '${imageName}' successfully deleted`))
    .catch((error) => console.log(`failed to delete image with name '${imageName}'`));
}