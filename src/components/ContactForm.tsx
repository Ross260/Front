
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    if (!formData.email.includes("@") || formData.name.length < 2 || formData.message.length < 10) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez remplir correctement tous les champs requis.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate sending the form
    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        category: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nous Contacter
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Des questions ou des propositions de collaboration? N'hésitez pas à nous écrire.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="md:flex">
              {/* Contact information */}
              <div className="bg-gradient-to-r from-medical-600 to-medical-900 p-8 md:w-2/5 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">Informations de contact</h3>
                  <p className="mt-4 text-medical-100">
                    Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la plateforme.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-medical-200 mr-3 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      <span>contact@retina-ml.fr</span>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-medical-200 mr-3 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      <span>+33 (0)1 23 45 67 89</span>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-medical-200 mr-3 flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span>Institut de la Vision<br />13 Rue Moreau, 75012 Paris</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="p-8 md:w-3/5">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-y-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom
                      </Label>
                      <div className="mt-1">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </Label>
                      <div className="mt-1">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                        Organisation
                      </Label>
                      <div className="mt-1">
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Catégorie
                      </Label>
                      <div className="mt-1">
                        <Select value={formData.category} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner une catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="question">Question générale</SelectItem>
                            <SelectItem value="technical">Support technique</SelectItem>
                            <SelectItem value="collaboration">Proposition de collaboration</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </Label>
                      <div className="mt-1">
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="resize-none"
                        />
                      </div>
                    </div>
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full bg-medical-600 hover:bg-medical-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
