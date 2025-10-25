import { FunctionNames } from 'Enums/FunctionNames';
import { useEffect, useState } from 'react';
import { sendAPIPost } from 'UtilityFunctions/apiUtility';
import { buildAzureFunctionURL } from 'UtilityFunctions/urlUtility';

interface ImageUploadProps {
    setBannerImageUrlCallback?: (url: string | null) => void;
    bannerImageUrl?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ setBannerImageUrlCallback, bannerImageUrl = "" }) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(bannerImageUrl);
    const imageUploadUrl = buildAzureFunctionURL(FunctionNames.UploadImage, process.env.REACT_APP_UPLOAD_IMAGE);

    const handleUpload = async (file: File | null) => {
        const fileExists = !!file;

        if (!fileExists) 
            return; 

        setImageFile(file);
        const binaryData: ArrayBuffer = await file.arrayBuffer();
        setUploadStatus("Uploading image...");
        const postImageResponse: Response = await sendAPIPost(imageUploadUrl, binaryData, file.type);

        if (postImageResponse.ok) {
            const responseData = await postImageResponse.json();
            setBannerImageUrlCallback && setBannerImageUrlCallback(responseData);
            setUploadStatus(null);
        } else {
            setUploadStatus("Image upload failed. Please try again.");
        }
    }

    useEffect(() => {
        if(imageFile) {
            const objectUrl = URL.createObjectURL(imageFile);
            setImageUrl(objectUrl);
        }
    }, [imageFile]);

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
            {uploadStatus && <p className="edit-calendar-event-form-upload-status">{uploadStatus}</p>}
            <img src={bannerImageUrl} alt="Preview" style={{ marginTop: '10px', maxWidth: '100%' }} />
        </div>
    );
};