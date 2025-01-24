import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { TranslationEditor } from "./components/TranslationEditor";
import { TranslationUploader } from "./components/TranslationUploader";
import { TranslationFilters } from "./components/TranslationFilters";
import { ContentTranslation } from "@/types/content";

const TranslationsPage = () => {
  const { toast } = useToast();
  const [selectedTranslation, setSelectedTranslation] = useState<ContentTranslation | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUploader, setShowUploader] = useState(false);

  const { data: translations, isLoading, error } = useQuery({
    queryKey: ['translations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_translations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as ContentTranslation[];
    }
  });

  const filteredTranslations = translations?.filter(translation => 
    translation.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
    translation.en?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    translation.es?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    toast({
      title: "Error loading translations",
      description: error.message,
      variant: "destructive",
    });
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Translation Management</h1>
        <div className="space-x-4">
          <Button 
            variant="outline"
            onClick={() => setShowUploader(true)}
          >
            Batch Upload
          </Button>
          <Button>Add Translation</Button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search translations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <TranslationFilters />
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Key</TableHead>
              <TableHead>English</TableHead>
              <TableHead>Spanish</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTranslations?.map((translation) => (
              <TableRow key={translation.id}>
                <TableCell>{translation.key}</TableCell>
                <TableCell>{translation.en}</TableCell>
                <TableCell>{translation.es}</TableCell>
                <TableCell>{translation.status}</TableCell>
                <TableCell>
                  {new Date(translation.updated_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedTranslation(translation)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedTranslation && (
        <TranslationEditor
          translation={selectedTranslation}
          onClose={() => setSelectedTranslation(null)}
        />
      )}

      {showUploader && (
        <TranslationUploader
          onClose={() => setShowUploader(false)}
        />
      )}
    </div>
  );
};

export default TranslationsPage;