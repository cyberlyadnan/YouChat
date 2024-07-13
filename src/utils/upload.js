import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { toast } from "react-toastify";

const upload = async (file) => {
  const metadata = {
    contentType: file.type || 'image/jpeg'
  };

  const date = new Date().toISOString();
  const storageRef = ref(storage, 'images/' + date + '-' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        toast.error(error.message);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            resolve(downloadURL);
          })
          .catch((error) => {
            toast.error(error.message);
            reject(error);
          });
      }
    );
  });
};

export default upload;
