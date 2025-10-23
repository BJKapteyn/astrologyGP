import { FunctionNames } from 'Enums/FunctionNames';
import { useState } from 'react';
import { sendAPIPost } from 'UtilityFunctions/apiUtility';
import { buildAzureFunctionURL } from 'UtilityFunctions/urlUtility';

interface ImageUploadProps {
    setBannerImageUrlCallback?: (url: string | null) => void;
    bannerImageUrl?: string | null;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ setBannerImageUrlCallback, bannerImageUrl = null }) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const imageUploadUrl = buildAzureFunctionURL(FunctionNames.UploadImage, process.env.REACT_APP_UPLOAD_IMAGE);

    const handleUpload = async (file: File | null) => {
        
        if (file) {
            setImageFile(file);
            const binaryData: ArrayBuffer = await file.arrayBuffer();

            const postImageResponse: Response = await sendAPIPost(imageUploadUrl, binaryData.toString(), file.type);

            if (postImageResponse.ok) {
                const responseData = await postImageResponse.json();
                setBannerImageUrlCallback && setBannerImageUrlCallback(responseData.imageUrl);
            }
        }
    }

    return (
        <div>
            <label className="edit-calendar-event-form-label" htmlFor="bannerImage">Banner Image:</label>
            <input
                className="edit-calendar-event-form-input"
                type="file"
                id="bannerImage"
                name="bannerImage"
                accept=".png, .jpg, .jpeg"
                onChange={e => {
                    const file = e.target.files?.[0] || null;
                    handleUpload(file);
                }}
            />
            {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Preview" style={{ marginTop: '10px', maxWidth: '100%' }} />}
        </div>
    );
};