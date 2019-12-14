import firebase from 'firebase';
import { getFileExtension } from 'helper/utils'

export const uploadFile = async (image, imageName, gameName) => {    

    console.log('imageName: ', imageName);
    console.log('gameName: ', gameName);

    const response = await fetch(image);
    const file = await response.blob();

    const extension = getFileExtension(imageName);
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