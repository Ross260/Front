
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ImageUpload = () => {
  const { toast } = useToast();
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isConsenting, setIsConsenting] = useState(false);
  const [isAnonymized, setIsAnonymized] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const newFiles: File[] = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.type.startsWith('image/')) {
        newFiles.push(file);
      }
    }
    
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de page (l'envoie automatique par le navigateur)
  
     // Vérifie si l'utilisateur a coché consentement et anonymisation
    if (!isConsenting || !isAnonymized) {
      toast({
        title: "Vérification nécessaire",
        description: "Merci de confirmer votre consentement et l'anonymisation des images.",
        variant: "destructive",
      });
      return;
    }
  
    if (files.length === 0) {
      toast({
        title: "Aucun fichier",
        description: "Veuillez télécharger au moins une image.",
        variant: "destructive",
      });
      return;
    }
  
    uploadFilesToServer();
  };
  

  const uploadFilesToServer = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));
  
    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors du téléchargement');
      }
  
      const result = await response.json();
      toast({
        title: "Téléchargement réussi!",
        description: `${result.files.length} image(s) téléchargées avec succès.`,
      });
  
      setFiles([]);
      setIsConsenting(false);
      setIsAnonymized(false);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Le téléchargement a échoué. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };
  

  return (
    <div id="upload" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Partager</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Téléchargez vos images de rétine
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Votre contribution aide à développer des algorithmes plus performants pour la détection précoce des pathologies rétiniennes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  dragging ? "border-medical-500 bg-medical-50" : "border-gray-300 hover:border-medical-400"
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-medical-500 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-900">Glissez-déposez vos images ici</p>
                <p className="text-sm text-gray-500 mt-1">ou cliquez pour parcourir</p>
                <Input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange}
                  accept="image/*"
                  multiple
                />
              </div>

              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">Images téléchargées</h3>
                  <ul className="mt-3 divide-y divide-gray-200">
                    {files.map((file, index) => (
                      <li key={index} className="py-3 flex justify-between items-center">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-medical-500 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                          <span className="text-sm text-gray-600 truncate max-w-xs">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          className="text-red-600 hover:text-red-900"
                          onClick={() => removeFile(index)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="consent" 
                    checked={isConsenting}
                    onCheckedChange={(checked) => setIsConsenting(checked === true)}
                  />
                  <Label htmlFor="consent" className="text-sm">
                    Je confirme avoir le consentement nécessaire pour partager ces images à des fins de recherche.
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="anonymized" 
                    checked={isAnonymized}
                    onCheckedChange={(checked) => setIsAnonymized(checked === true)}
                  />
                  <Label htmlFor="anonymized" className="text-sm">
                    Je confirme que toutes les images ont été anonymisées et ne contiennent aucune information personnelle.
                  </Label>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  type="submit" 
                  className="w-full bg-medical-600 hover:bg-medical-700">
                  Soumettre les images
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
