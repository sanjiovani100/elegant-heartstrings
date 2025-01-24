import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContentTranslation } from "@/types/content";
import { useQueryClient } from "@tanstack/react-query";

interface TranslationEditorProps {
  translation: ContentTranslation;
  onClose: () => void;
}

export const TranslationEditor = ({ translation, onClose }: TranslationEditorProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState(translation);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('content_translations')
        .update({
          en: formData.en,
          es: formData.es,
          updated_at: new Date().toISOString()
        })
        .eq('id', translation.id);

      if (error) throw error;

      toast({
        title: "Translation updated",
        description: "The translation has been successfully updated.",
      });

      queryClient.invalidateQueries({ queryKey: ['translations'] });
      onClose();
    } catch (error) {
      toast({
        title: "Error updating translation",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Translation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Translation Key</Label>
            <Input value={formData.key} disabled />
          </div>
          <div className="space-y-2">
            <Label>English</Label>
            <Textarea
              value={formData.en || ""}
              onChange={(e) => setFormData({ ...formData, en: e.target.value })}
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label>Spanish</Label>
            <Textarea
              value={formData.es || ""}
              onChange={(e) => setFormData({ ...formData, es: e.target.value })}
              rows={4}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};