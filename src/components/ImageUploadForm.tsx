import React, { useState } from "react";

export const ImageUploadForm: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if(file){
            setSelectedFile(file);

            // Crear URL de previsualización
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            }
            reader.readAsDataURL(file);
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
        }
    };

    return(
        <form className="max-w-sm w-full mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Subir Imagen</h2>
        
        <div className="mb-5"> {/* Cambiado a mb-5 para consistencia */}
          <label htmlFor="imageUpload" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Seleccionar Imagen:
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
            // Clases de estilo para el input basadas en el ejemplo que proporcionaste
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
          />
        </div>
  
        {previewUrl && (
          <div className="mt-6 mb-5"> {/* Añadido mb-5 para espaciado */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Previsualización de la Imagen:</h3>
            <div className="border border-gray-300 rounded-lg overflow-hidden flex justify-center items-center p-2 dark:border-gray-600">
              <img
                src={previewUrl}
                alt="Previsualización de la imagen seleccionada"
                className="max-w-full h-auto max-h-60 object-contain"
              />
            </div>
          </div>
        )}
  
        <button
          type="submit"
          // Clases de estilo para el botón basadas en el ejemplo que proporcionaste
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={!selectedFile}
        >
          Subir Imagen
        </button>
      </form>
    )
}