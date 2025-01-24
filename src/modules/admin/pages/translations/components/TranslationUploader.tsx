import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { Upload } from "lucide-react";

interface TranslationUploaderProps {
  onClose: () => void;
}

export const TranslationUploader = ({ onClose }: TranslationUploaderProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (!e.target?.result) return;
        
        const translations = JSON.parse(e.target.result as string);
        
        // Batch insert translations
        const { error } = await supabase
          .from('content_translations')
          .upsert(translations, { 
            onConflict: 'key',
            ignoreDuplicates: false 
          });

        if (error) throw error;

        toast({
          title: "Translations uploaded",
          description: "The translations have been successfully uploaded.",
        });

        queryClient.invalidateQueries({ queryKey: ['translations'] });
        onClose();
      };

      reader.readAsText(file);
    } catch (error) {
      toast({
        title: "Error uploading translations",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownloadTemplate = () => {
    const template = [
      {
        key: "example.key",
        en: "English text",
        es: "Spanish text",
        content_type: "text"
      }
    ];

    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'translations-template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Translations</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-500"
              >
                Upload a file
              </label>
              <p className="mt-2 text-sm text-gray-500">
                {file ? file.name : "JSON files only"}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleDownloadTemplate}
            >
              Download Template
            </Button>
            <div className="space-x-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="button"
                disabled={!file || isUploading}
                onClick={handleUpload}
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};