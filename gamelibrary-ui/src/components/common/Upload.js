import React, { useState } from 'react';
import ImageUpload from 'react-images-upload';
import { MESSAGES } from 'helper/message';

const Upload = ({setImage}) =>{
    const [image, setImageUpload] = useState(null);

    const OnChange = (a, b) => {
        setImageUpload(a) ;
        setImage(a, b);    
    }
    return (
        <ImageUpload
            withPreview={true}
            withIcon={true}
            buttonText={MESSAGES.UPLOAD_IMAGE}
            onChange={OnChange}
            imgExtension={['.jpg', '.png', 'jpeg']}
            fileTypeError={MESSAGES.FILE_EXTENSION_ERROR}
            fileSizeError={MESSAGES.FILE_SIZE_ERROR}
            maxFileSize={5242880}
            singleImage={true}
            fileContainerStyle={{width:'300px', height:'300px'}}
        />
    );
}

export default Upload;