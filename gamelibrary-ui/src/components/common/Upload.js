import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
 
const Upload = ({setImage}) =>{
    const [image, setImageUpload] = useState(null);

    const OnChange = (a, b) => {
        setImageUpload(a) ;
        setImage(a, b);    
    }
    return (

        <ImageUploader
            withPreview={true}
            withIcon={true}
            buttonText='Upload game image'
            onChange={OnChange}
            imgExtension={['.jpg', '.png']}
            fileTypeError='is not supported file extension'
            fileSizeError='file size is too big'
            maxFileSize={5242880}
            singleImage={true}
            fileContainerStyle={{width:'300px', height:'300px'}}
        />

    );
}

export default Upload;